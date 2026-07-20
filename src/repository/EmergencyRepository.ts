import { supabase } from "../lib/supabase";

//1. lưu sđt vào danh sách cuộc gọi khẩn cấp
export const getEmergency = {
  async addEmergency(doctorId: number) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      throw new Error("Chưa đăng nhập");
    }
    const { data: account, error: accountError } = await supabase
      .from("accounts")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (accountError) throw accountError;

    const { data, error } = await supabase
      .from("emergency_contacts")
      .insert({ account_id: account.id, doctor_id: doctorId })
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  async deleteEmergency(doctorId: number) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      throw new Error("Chưa đăng nhập");
    }
    const { data: account, error: accountError } = await supabase
      .from("accounts")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (accountError) throw accountError;

    const { data, error } = await supabase
      .from("emergency_contacts")
      .delete()
      .eq("account_id", account.id)
      .eq("doctor_id", doctorId);
    if (error) throw error;
    return data;
  },
  async getAllEmergency() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      throw new Error("Chưa đăng nhập");
    }
    const { data: account, error: accountError } = await supabase
      .from("accounts")
      .select("id")
      .eq("user_id", user.id)
      .single();
    if (accountError) throw accountError;
    const { data, error } = await supabase
      .from("emergency_contacts")
      .select(
        `
      id,
      created_at,
      doctor:doctor_id(
        id,
        specialization,
        avatar_url,
        accounts:account_id(
          username,
          address,
          gender,
          role,
          created_at
        )
      )
    `,
      )
      .eq("account_id", account.id);
    if (error) throw error;
    return data;
  },
};
