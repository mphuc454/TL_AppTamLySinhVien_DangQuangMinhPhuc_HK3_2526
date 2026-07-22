import { supabase } from "../lib/supabase";
import { Emotion } from "../models/Emotion";
import { EmotionLog } from "../models/EmotionLog";

//1. lấy danh sách emotion từ cơ sở dữ liệu
export const getAllEmotion = async (): Promise<Emotion[]> => {
  const { data, error } = await supabase
    .from("emotions")
    .select("*")
    .order("id");
  if (error) {
    throw error;
  }
  return data as Emotion[];
};
//2. Thêm vào nhật ký cảm xúc
export const insertEmotionLog = async (emotionId: number, content: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Chưa đăng nhập");
  }
  const { data, error } = await supabase
    .from("emotion_logs")
    .insert({ account_id: user.id, emotion_id: emotionId, content })
    .select()
    .single();
  if (error) {
    throw error;
  }
  return data;
};

//3. Lấy lịch sử nhật ký cảm xúc
export const getEmotionLog = async (): Promise<EmotionLog[]> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Chưa đăng nhập");
  }
  const { data, error } = await supabase
    .from("emotion_logs")
    .select(`*, emotions (id, name, icon, color)`)
    .eq("account_id", user.id)
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return data as EmotionLog[];
};

//4. Xoá lịch sử nhật ký cảm xúc theo id
export const deleteEmotionLog = async (id: number): Promise<void> => {
  const { error } = await supabase.from("emotion_logs").delete().eq("id", id);
  if (error) {
    throw error;
  }
};

//5.Thống kê tổng số lượt ghi nhật ký
export const totalEmotionLog = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Chưa đăng nhập");
  }
  const { count, error } = await supabase
    .from("emotion_logs")
    .select("*", { count: "exact", head: true })
    .eq("account_id", user.id);
  if (error) {
    throw error;
  }
  return count ?? 0;
};
//6.Thống kê cảm xúc ghi nhận nhiều nhất
export const mostEmotion = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Chưa đăng nhập");
  }
  const { data, error } = await supabase
    .from("emotion_logs")
    .select(
      `*, emotions(
        id,
        name,
        icon,
        color
      )
    `,
    )
    .eq("account_id", user.id);
  if (error) {
    throw error;
  }
  return data;
};

//7.Thống kê toàn bộ biểu cảm của nhật ký của user by id:
export const totalEmotion = async (userId: string) => {
  const { data, error } = await supabase
    .from("emotion_logs")
    .select("emotion_id")
    .eq("account_id", userId);

  if (error) throw error;

  const tichcuc = data.filter((i) => i.emotion_id === 1).length;
  const binhthan = data.filter((i) => i.emotion_id === 2).length;
  const loau = data.filter((i) => i.emotion_id === 3).length;
  const buonba = data.filter((i) => i.emotion_id === 4).length;
  const giandu = data.filter((i) => i.emotion_id === 5).length;

  return { tichcuc, binhthan, loau, buonba, giandu };
};
