import { supabase } from "../lib/supabase";

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
