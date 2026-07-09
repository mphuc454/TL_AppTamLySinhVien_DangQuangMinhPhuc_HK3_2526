import { supabase } from "../lib/supabase";

export const register = async (
  username: string,
  email: string,
  phone: string,
  password: string
): Promise<boolean> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    const user = data.user;

    if (!user) {
      throw new Error("Không tạo được tài khoản.");
    }

    const { error: userError } = await supabase.from("user").insert({
      id: user.id,
      full_name: username,
      email,
      phone,
    });
    if (userError) throw userError;
    const { error: accountError } = await supabase.from("accounts").insert({
      id: user.id,
      username,
      role: 1,
      created_at: new Date().toISOString(),
    });
console.log(accountError);

    if (accountError) throw accountError;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};