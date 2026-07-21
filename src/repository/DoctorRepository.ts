import { supabase } from "../lib/supabase";

//1. lấy danh sách bác sĩ từ cơ sở dữ liệu
export const getAllDoctor = async () => {
  const { data: doctors, error } = await supabase
    .from("doctors")
    .select(`*, account_id(*)`);
  if (error) throw error;
  const { data: profiles, error: profileError } = await supabase
    .from("user")
    .select("*");
  if (profileError) throw profileError;
  return doctors.map((doctor) => ({
    ...doctor,
    account_id: doctor.account_id
      ? {
          ...doctor.account_id,
          user_id: profiles.find(
            (profile) => profile.id === doctor.account_id?.user_id,
          ),
        }
      : null,
  }));
};

//2. lấy tk từ bác sĩ hiện tại
export const getCurrentDoctor = async () => {
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

  const { data: doctor, error: doctorError } = await supabase
    .from("doctors")
    .select(`*, account_id(*)`)
    .eq("account_id", account.id)
    .maybeSingle();

  if (doctorError) throw doctorError;

  return doctor;
};

//3. lấy chi tiết thông tin bác sĩ từ cơ sở dữ liệu
export const getDoctorByID = async (id: number) => {
  const { data: doctor, error } = await supabase
    .from("doctors")
    .select(`*, account_id(*)`)
    .eq("id", id)
    .single();

  if (error) throw error;

  if (!doctor.account_id) {
    return { ...doctor, account_id: null };
  }

  const { data: profile, error: profileError } = await supabase
    .from("user")
    .select("*")
    .eq("id", doctor.account_id.user_id)
    .single();

  if (profileError) throw profileError;

  return {
    ...doctor,
    account_id: {
      ...doctor.account_id,
      profile,
    },
  };
};

//4. Vô hiệu hoá tài khoản:
export const toggleVerify = async (id: number, verify: boolean) => {
  const { data, error } = await supabase
    .from("doctors")
    .update({ verify })
    .eq("id", id);
  if (error) throw error;
  return data;
};

//6. Xoá bác sĩ
export const deleteDoctor = async (id: number): Promise<void> => {
  const { error } = await supabase.from("doctors").delete().eq("id", id);
  if (error) {
    throw error;
  }
};

//5. cập nhật bác sĩ
export async function updateDoctor(
  account_id: number,
  experience_years: number,
  specialization: string,
  bio: string,
  role_doctor: string,
) {
  const { data: existingDoctor, error: findError } = await supabase
    .from("doctors")
    .select("id")
    .eq("account_id", account_id)
    .maybeSingle();

  if (findError) throw findError;

  const payload = {
    account_id,
    experience_years,
    specialization,
    bio,
    role_doctor,
  };

  if (existingDoctor) {
    const { error } = await supabase
      .from("doctors")
      .update({
        experience_years,
        specialization,
        bio,
        role_doctor,
      })
      .eq("account_id", account_id);

    if (error) throw error;
    return;
  }

  const { error } = await supabase.from("doctors").insert(payload);
  if (error) throw error;
}
