import { supabase } from "../lib/supabase";
import { DoctorSkill } from "../models/DoctorSkill";

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

//2. Lấy kỹ năng của bác sĩ từ DB:
export const getSkillDoctor = async (): Promise<DoctorSkill[]> => {
  const { data, error } = await supabase
    .from("doctor_skills")
    .select(`doctor_id,  skill_id, skills (id, name)`);
  if (error) throw error;
  return data ?? [];
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
      user_id: profile,
    },
  };
};

//4. Lấy chi tiết kỹ năng của bác sĩ từ DB:
export const getSkillDetailDoctor = async (
  DoctorID: number,
): Promise<DoctorSkill[]> => {
  const { data, error } = await supabase
    .from("doctor_skills")
    .select(`skill_id (*)`)
    .eq("doctor_id", DoctorID);

  if (error) throw error;
  return data as unknown as DoctorSkill[];
};

//5. Vô hiệu hoá tài khoản:
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

//7. cập nhật bác sĩ
export async function updateDoctor(
  id: number,
  experience_years: number,
  specialization: string,
  bio: string,
  role_doctor: string,
) {
  const { error } = await supabase
    .from("doctors")
    .update({
      experience_years,
      specialization,
      bio,
      role_doctor,
    })
    .eq("id", id);

  if (error) throw error;
}
