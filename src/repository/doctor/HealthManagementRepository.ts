import { supabase } from "../../lib/supabase";

// 1. thêm vào quản lý sức khoẻ
export const reqHealthManagement = async (doctorId: number) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Chưa đăng nhập");

  const { data: account, error: accountError } = await supabase
    .from("accounts")
    .select("id")
    .eq("user_id", user.id)
    .single();

  if (accountError) throw accountError;

  const { error } = await supabase.from("health_managements").insert({
    account_id: account.id,
    doctor_id: doctorId,
    status: false,
  });

  if (error) throw error;
};

// 2. xem ds quản lý sức khoẻ
export const allHealthManagement = async () => {
  const { data: healthManagements, error } = await supabase
    .from("health_managements")
    .select(`*, account_id(*)`);

  if (error) throw error;

  const { data: profiles, error: profileError } = await supabase
    .from("user")
    .select("*");

  if (profileError) throw profileError;

  return healthManagements.map((item) => ({
    ...item,
    account_id: item.account_id
      ? {
          ...item.account_id,
          user_id: profiles.find(
            (profile) => profile.id === item.account_id?.user_id,
          ),
        }
      : null,
  }));
};

// 3. kiểm tra đã thêm vào yêu cầu chưa
export const checkHealthManagement = async (doctorId: number) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Chưa đăng nhập");

  const { data: account, error: accountError } = await supabase
    .from("accounts")
    .select("id")
    .eq("user_id", user.id)
    .single();

  if (accountError) throw accountError;

  const { data: existed, error } = await supabase
    .from("health_managements")
    .select("id, status")
    .eq("account_id", account.id)
    .eq("doctor_id", doctorId)
    .maybeSingle();

  if (error) throw error;
  return existed;
};

//4. chấp nhận yêu cầu:
export const toggleStatus = async (id: number, status: boolean) => {
  const { data, error } = await supabase
    .from("health_managements")
    .update({ status })
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
};

// 5. xem chi tiết quản lý sức khoẻ
export const getDetailHealthManagement = async (accountId: number) => {
  const { data: health, error } = await supabase
    .from("health_managements")
    .select("*, account_id(*)")
    .eq("account_id", accountId)
    .eq("status", true)
    .maybeSingle();

  if (error) throw error;
  if (!health) {
    return null;
  }
  const { data: profile, error: profileError } = await supabase
    .from("user")
    .select("*")
    .eq("id", health.account_id.user_id)
    .single();

  if (profileError) throw profileError;

  return {
    ...health,
    account_id: {
      ...health.account_id,
      profile,
    },
  };
};
// 6. xoá id quản lý sức khoẻ
export const deleteHealthManagement = async (id: number) => {
  const { error } = await supabase
    .from("health_managements")
    .delete()
    .eq("id", id)
    .select();
  if (error) {
    throw error;
  }
};

//7.Thống kê toàn bộ biểu cảm của nhật ký của user by id:
export const totalEmotion = async (userId: string) => {
  const { data, error } = await supabase
    .from("emotion_logs")
    .select("emotion_id")
    .eq("account_id", userId);

  if (error) throw error;

  const tichcuc = data.filter((i) => i.emotion_id === 1).length;
  const binhthan = data.filter((i) => i.emotion_id === 2).length;
  const loau = data.filter((i) => i.emotion_id === 3).length;
  const buonba = data.filter((i) => i.emotion_id === 4).length;
  const giandu = data.filter((i) => i.emotion_id === 5).length;

  return { tichcuc, binhthan, loau, buonba, giandu };
};
