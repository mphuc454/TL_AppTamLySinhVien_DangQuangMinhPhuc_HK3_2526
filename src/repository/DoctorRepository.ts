import { supabase } from "../lib/supabase";
import { Doctor } from "../models/Doctor";
import { DoctorSkill } from "../models/DoctorSkill";

//1. lấy danh sách bác sĩ từ cơ sở dữ liệu
export const getAllDoctor = async (): Promise<Doctor[]> => {
  const { data, error } = await supabase
    .from("doctors")
    .select(`*, account_id(*, user_id(*))`);
  if (error) throw error;
  return data ?? [];
};
//2. Lấy kỹ năng của bác sĩ từ DB:
export const getSkillDoctor = async (): Promise<DoctorSkill[]> => {
  const { data, error } = await supabase
    .from("doctor_skills")
    .select(`doctor_id,  skill_id, skills (id, name)`);
  if (error) throw error;
  return data ?? [];
};

//3. lấy chi tiết 1 bài viết từ cơ sở dữ liệu
export const getDoctorByID = async (id: number) => {
  const { data, error } = await supabase
    .from("doctors")
    .select(`*, account_id(*, user_id (*))`)
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
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
