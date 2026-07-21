import { supabase } from "../lib/supabase";
import { HealthManagements } from "../models/HealthManagements";

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
export const allHealthManagement = async (): Promise<HealthManagements[]> => {
  const { data, error } = await supabase.from("health_managements").select(`
      *,
      account_id (
        id,
        username,
        gender,
        year_birth,
        user_id (
          full_name,
          email,
          phone
        )
      )
    `);
  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
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
