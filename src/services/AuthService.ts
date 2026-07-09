import { supabase } from "../lib/supabase";

// 1. Xử lý đăng ký
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
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// 2. Xử lý đăng nhập
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
export const createAccount = async (username: string, role: number): Promise<boolean> => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error("Chưa đăng nhập");
    const { error } = await supabase.from("accounts").insert({
      id: user.id,
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

export const hasAccount = async (): Promise<boolean> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return false;

  const { data, error } = await supabase
    .from("accounts")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    console.log(error);
    return false;
  }

  return !!data;
};

export const getAccount = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("accounts")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) throw error;
  return data;
};