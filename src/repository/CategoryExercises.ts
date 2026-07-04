import { supabase } from "../lib/supabase";
import { CategoryExercise } from "../models/CategoryExercise";


//1. lấy danh sách các thể loại bàu tập từ cơ sở dữ liệu
export const getCategoryExercises = async (): Promise<CategoryExercise[]> => {
const { data, error } = await supabase.from("category_exercises").select("*");
 if (error) throw error;
  return data ?? [];
}