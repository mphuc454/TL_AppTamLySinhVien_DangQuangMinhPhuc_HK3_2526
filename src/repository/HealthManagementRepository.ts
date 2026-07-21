import { supabase } from "../lib/supabase";

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

// 3. kiểm tra đã thêm vào chưa
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
    .select("id")
    .eq("account_id", account.id)
    .eq("doctor_id", doctorId)
    .maybeSingle();

  if (error) throw error;
  console.log("existed:", existed);
  return existed;
};

//4. chấp nhận yêu cầu:
export const toggleStatus = async (id: number, status: boolean) => {
  const { data, error } = await supabase
    .from("health_managements")
    .update({ status })
    .eq("id", id);
  if (error) throw error;
  return data;
};

// 5. xem chi tiết quản lý sức khoẻ
export const getDetailHealthManagement = async (id: number) => {
  const { data: detailedhealth, error } = await supabase
    .from("health_managements")
    .select(`*, account_id(*)`)
    .eq("id", id)
    .single();

  if (error) throw error;

  const { data: profiles, error: profileError } = await supabase
    .from("user")
    .select("*")
    .eq("id", detailedhealth.account_id.user_id)
    .single();

  if (profileError) throw profileError;

  return {
    ...detailedhealth,
    account_id: {
      ...detailedhealth.account_id,
      profiles,
    },
  };
};
