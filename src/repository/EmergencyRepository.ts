// export const getEmergency = {
//   async addEmergency(doctorId: number) {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     if (!user) {
//       throw new Error("Chưa đăng nhập");
//     }
//     const { data: account, error: accountError } = await supabase
//       .from("accounts")
//       .select("id")
//       .eq("user_id", user.id)
//       .single();

import { supabase } from "../lib/supabase";
import { Emergency_Contacts } from "../models/Emergency_Contacts";

//     if (accountError) throw accountError;

//     const { data, error } = await supabase
//       .from("emergency_contacts")
//       .insert({ account_id: account.id, doctor_id: doctorId })
//       .select()
//       .single();
//     if (error) throw error;
//     return data;
//   },
//   async deleteEmergency(doctorId: number) {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     if (!user) {
//       throw new Error("Chưa đăng nhập");
//     }
//     const { data: account, error: accountError } = await supabase
//       .from("accounts")
//       .select("id")
//       .eq("user_id", user.id)
//       .single();

//     if (accountError) throw accountError;

//     const { data, error } = await supabase
//       .from("emergency_contacts")
//       .delete()
//       .eq("account_id", account.id)
//       .eq("doctor_id", doctorId);
//     if (error) throw error;
//     return data;
//   },
//   async getAllEmergency() {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     if (!user) {
//       throw new Error("Chưa đăng nhập");
//     }
//     const { data: account, error: accountError } = await supabase
//       .from("accounts")
//       .select("id")
//       .eq("user_id", user.id)
//       .single();
//     if (accountError) throw accountError;
//     const { data, error } = await supabase
//       .from("emergency_contacts")
//       .select(
//         `
//       id,
//       created_at,
//       doctor:doctor_id(
//         id,
//         specialization,
//         avatar_url,
//         accounts:account_id(
//           username,
//           address,
//           gender,
//           role,
//           created_at
//         )
//       )
//     `,
//       )
//       .eq("account_id", account.id);
//     if (error) throw error;
//     return data;
//   },
// };

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
