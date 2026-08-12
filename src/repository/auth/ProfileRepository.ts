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

//3. upload ảnh vào supabase storage của doctor
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
