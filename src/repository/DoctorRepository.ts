import { supabase } from "../lib/supabase";
import { Doctor } from "../models/Doctor";


//1. lấy danh sách bác sĩ từ cơ sở dữ liệu
export const getAllDoctor = async() : Promise<Doctor[]> => {
    const { data, error } = await supabase
    .from("doctors")
    .select(`*, account_id(*, user_id (*))`)
    if (error) throw error;
  return data ?? [];
}