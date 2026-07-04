import { supabase } from "../lib/supabase";
import { Exercise } from "../models/Exercises";


//1. lấy danh sách bài tập từ cơ sở dữ liệu
export const getAllExercises = async (): Promise<Exercise[]> => {
    const { data, error } = await supabase
    .from("exercises")
    .select(`*,
        category:category_exercises (
          id,
          name
        )
      `);
      if (error) {
      throw new Error(error.message);
    }
    return data ?? [];
}
//2. lấy chi tiết 1 bài tập từ cơ sở dữ liệu
export const getExercisesbyID = async (id: number) => {
    const { data, error } = await supabase
    .from("exercises")
    .select(`*,
        category:category_exercises (
          id,
          name
        ),
        exercises_steps(
          id, title_step, des_step, time_step
        )
      `)
      .eq("id", id)
      .single();
      if (error) {
      throw new Error(error.message);
    }
    return data ?? [];
}
