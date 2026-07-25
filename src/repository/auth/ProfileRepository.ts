import { supabase } from "@/src/lib/supabase";

//1. lấy danh sách account từ cơ sở dữ liệu
export const getAccountById = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Chưa đăng nhập");
  }
  const { data: account, error: accountError } = await supabase
    .from("accounts")
    .select(`*`)
    .eq("user_id", user.id)
    .single();
  if (accountError) {
    throw new Error(accountError.message);
  }
  const { data: profile, error: profileError } = await supabase
    .from("user")
    .select("*")
    .eq("id", user.id)
    .single();
  if (profileError) throw profileError;
  return {
    ...account,
    user_id: profile,
  };
};

//2.cập nhật thông tin account từ cơ sở dữ liệu
export const modifyAccountbyID = async (
  username: string,
  phone: string,
  email: string,
  gender: string,
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Chưa đăng nhập");
  }
  const formatGender = gender.trim().toUpperCase();
  const { data: account, error: accountError } = await supabase
    .from("accounts")
    .update({ username, gender: formatGender })
    .eq("user_id", user.id)
    .select()
    .single();
  if (accountError) throw accountError.message;
  const { data: profile, error: profileError } = await supabase
    .from("user")
    .update({ email, phone })
    .eq("id", user.id)
    .select()
    .single();
  if (profileError) throw profileError;
  return {
    ...account,
    user_id: profile,
  };
};

//3.Thống kê tổng số người dùng
export const totalAccount = async () => {
  const { count, error } = await supabase
    .from("accounts")
    .select("*", { count: "exact", head: true })
    .eq("role", 1);
  if (error) throw error;
  return count ?? 0;
};

//4.Thống kê tổng số bác sĩ
export const totalDoctor = async () => {
  const { count, error } = await supabase
    .from("accounts")
    .select("*", { count: "exact", head: true })
    .eq("role", 3);
  if (error) throw error;
  return count ?? 0;
};

//5.Thống kê tổng số admin
export const totalAdmin = async () => {
  const { count, error } = await supabase
    .from("accounts")
    .select("*", { count: "exact", head: true })
    .eq("role", 2);
  if (error) throw error;
  return count ?? 0;
};

//6.Thống kê tổng số giới tính
export const totalGender = async () => {
  const { data, error } = await supabase.from("accounts").select("gender");
  if (error) throw error;
  const male = data.filter((i) => i.gender === "NAM").length;
  const female = data.filter((i) => i.gender === "NỮ").length;

  return { male, female };
};

//7.Thống kê accounts trong năm
export const totalUserByYear = async () => {
  const { data, error } = await supabase.from("accounts").select("created_at");
  if (error) throw error;
  const statistical: Record<string, number> = {};
  data.forEach((i: any) => {
    const getYear = new Date(i.created_at).getFullYear().toString();
    statistical[getYear] = (statistical[getYear] || 0) + 1;
  });
  return Object.entries(statistical).map(([getYear, total]) => ({
    getYear,
    total,
  }));
};

//8. upload ảnh vào supabase storage
export const uploadDoctorImage = async (imageUri: string, doctorId: number) => {
  const response = await fetch(imageUri);
  const arrayBuffer = await response.arrayBuffer();
  const fileName = `${doctorId}-${Date.now()}.jpg`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("doctor_image")
    .upload(fileName, arrayBuffer, {
      contentType: "image/jpeg",
      upsert: true,
    });

  if (uploadError) throw uploadError;

  const { data: publicData } = supabase.storage
    .from("doctor_image")
    .getPublicUrl(uploadData.path);

  const { data, error } = await supabase
    .from("doctors")
    .update({
      avatar_url: publicData.publicUrl,
    })
    .eq("id", doctorId)
    .select();

  if (error) throw error;

  return data;
};
