import { supabase } from "../lib/supabase";
import { Music } from "../models/Music";

//1. lấy danh sách bài nhạc từ cơ sở dữ liệu
export const getAllMusics = async (): Promise<Music[]> => {
  const { data, error } = await supabase.from("musics").select(`*`);
  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
};

//2. lấy danh sách bài nhạc từ cơ sở dữ liệu
export const geDetailedMusicsbyID = async (id: number) => {
  const { data, error } = await supabase
    .from("musics")
    .select(`*`)
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
};

//3.Thống kê tổng số bài nhạc
export const totalMusic = async () => {
  const { count, error } = await supabase
    .from("musics")
    .select("*", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
};
