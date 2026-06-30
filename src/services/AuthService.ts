import { supabase } from "../lib/supabase";
import { AuthResult, RegisterModel } from "../models/User";

export class AuthService {
  register = async (data: RegisterModel): Promise<AuthResult> => {
    const { email, password, username, phone } = data;
    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) return { success: false, message: error.message };
    if (!signUpData.user)
      return { success: false, message: "lỗi không thể tạo người dùng được" };
    const { error: insertError } = await supabase.from("users").insert({
      id: signUpData.user.id,
      username,
      email,
      phone,
      role: "user",
    });
    if (insertError) return { success: false, message: insertError.message };
    return {
      success: true,
      userId: signUpData.user.id,
      message: "Đăng ký thành công, vui lòng xác nhận email",
    };
  };
  loginWithOAuth = async (provider: "google" | "facebook") => {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) throw error;
    return data;
  };
}
export const authService = new AuthService();
