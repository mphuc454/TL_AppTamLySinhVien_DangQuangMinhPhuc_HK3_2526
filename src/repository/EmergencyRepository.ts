import { supabase } from "../lib/supabase";
import { Emergency_Contacts } from "../models/Emergency_Contacts";

//1. lấy sđt vào danh sách cuộc gọi khẩn cấp
export const getEmergency = async (): Promise<Emergency_Contacts[]> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Chưa đăng nhập");
  }
  const { data, error } = await supabase
    .from("emergency_contacts")
    .select(
      `
      id,
      created_at,
      account_id,
      doctor_id(
        id,
        specialization,
        verify,
        experience_years,
        bio,
        role_doctor,
        avatar_url,
        account_id(
          id,
          user_id,
          username,
          address,
          gender,
          year_birth,
          role,
          created_at
        )
      )
    `,
    )
    .eq("account_id", user.id);

  if (error) throw error;

  const result = await Promise.all(
    (data ?? []).map(async (item: any) => {
      const doctorAccount = item.doctor_id.account_id;

      const { data: profile } = await supabase
        .from("user")
        .select("phone")
        .eq("id", doctorAccount.user_id)
        .single();

      return {
        ...item,
        doctor_id: {
          ...item.doctor_id,
          account_id: {
            ...doctorAccount,
            user_id: profile,
          },
        },
      };
    }),
  );
  return result as Emergency_Contacts[];
};

//2. thêm sđt vào danh sách cuộc gọi khẩn cấp
export const addEmergency = async (doctorId: number) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Chưa đăng nhập");
  }
  const { data, error } = await supabase
    .from("emergency_contacts")
    .insert({ account_id: user.id, doctor_id: doctorId })
    .select()
    .single();
  if (error) throw error;
  return data;
};

//3. xoá sđt vào danh sách cuộc gọi khẩn cấp
export const removeEmergency = async (id: number) => {
  const { data, error } = await supabase
    .from("emergency_contacts")
    .delete()
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
};
