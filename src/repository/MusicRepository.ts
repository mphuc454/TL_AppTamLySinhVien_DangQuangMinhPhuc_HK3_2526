import { supabase } from "../lib/supabase";
import { Music } from "../models/Music";

//1. lấy danh sách bài nhạc từ cơ sở dữ liệu
export const getAllMusics = async (): Promise<Music[]> => {
    const { data, error } = await supabase
    .from("musics")
    .select(`*`);
      if (error) {
      throw new Error(error.message);
    }
    return data ?? [];
}