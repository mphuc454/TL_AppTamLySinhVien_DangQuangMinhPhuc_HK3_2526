import { supabase } from "@/src/lib/supabase";
import * as Linking from "expo-linking";
type AuthResult = {
  success: boolean;
  error?: string;
};

// 1. Xử lý đăng ký
export const register = async (
  username: string,
  email: string,
  phone: string,
  password: string,
): Promise<AuthResult> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      return { success: false, error: error.message };
    }

    const user = data.user;
    if (!user) {
      return { success: false, error: "Không tạo được tài khoản." };
    }

    const { error: userError } = await supabase.from("user").insert({
      id: user.id,
      full_name: username,
      email,
      phone,
    });

    if (userError) {
      return { success: false, error: userError.message };
    }

    return { success: true };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error?.message || "Đăng ký thất bại." };
  }
};

// 2. Xử lý đăng nhập
export const login = async (
  email: string,
  password: string,
): Promise<AuthResult> => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error?.message || "Đăng nhập thất bại." };
  }
};

//3. Đăng xuất
export const logout = async (): Promise<boolean> => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    return false;
  }

  return true;
};

// 4. Xử lý account
export const createAccount = async (
  username: string,
  role: number,
): Promise<boolean> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error("Chưa đăng nhập");
    const { error } = await supabase.from("accounts").insert({
      user_id: user.id,
      username,
      role,
      created_at: new Date().toISOString(),
    });

    if (error) throw error;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// 5. Kiểm tra account
export const hasAccount = async (): Promise<boolean> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return false;

  const { data, error } = await supabase
    .from("accounts")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.log(error);
    return false;
  }
  return !!data;
};

// 6. Lấy account
export const getAccount = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("accounts")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) throw error;
  return data;
};

// 7. Thay đổi password
export const changePassword = async (newPass: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || !user.email) return null;
  const { error } = await supabase.auth.updateUser({ password: newPass });
  if (error) throw error;
  return true;
};

// 7. Quên password
export const forgotPassword = async (email: string) => {
  const redirectTo = Linking.createURL("auth/ResetPass");
  console.log(Linking.createURL("auth/ResetPass"));
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  });
  if (error) throw error;
};
// 8. Đặt lại password
export const resetPassword = async (newPassword: string) => {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw error;

  return true;
};

// 9. Lấy token thông báo
export const getExpoToken = async (accountId: number) => {
  const { data, error } = await supabase
    .from("accounts")
    .select("expo_push_token")
    .eq("id", accountId)
    .single();

  if (error) throw error;

  return data?.expo_push_token;
};
