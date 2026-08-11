import { supabase } from "@/src/lib/supabase";

//1.Thống kê tổng số người dùng
export const totalAccount = async () => {
  const { count, error } = await supabase
    .from("accounts")
    .select("*", { count: "exact", head: true })
    .eq("role", 1);
  if (error) throw error;
  return count ?? 0;
};

//2.Thống kê tổng số bác sĩ
export const totalDoctor = async () => {
  const { count, error } = await supabase
    .from("accounts")
    .select("*", { count: "exact", head: true })
    .eq("role", 3);
  if (error) throw error;
  return count ?? 0;
};

//3.Thống kê tổng số admin
export const totalAdmin = async () => {
  const { count, error } = await supabase
    .from("accounts")
    .select("*", { count: "exact", head: true })
    .eq("role", 2);
  if (error) throw error;
  return count ?? 0;
};

//4.Thống kê tổng số giới tính
export const totalGender = async () => {
  const { data, error } = await supabase.from("accounts").select("gender");
  if (error) throw error;
  const male = data.filter((i) => i.gender === "NAM").length;
  const female = data.filter((i) => i.gender === "NỮ").length;

  return { male, female };
};

//5.Thống kê tổng số bài tập
export const totalExercise = async () => {
  const { count, error } = await supabase
    .from("exercises")
    .select("*", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
};

//6.Thống kê tổng số bài viết
export const totalArticle = async () => {
  const { count, error } = await supabase
    .from("articles")
    .select("*", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
};

//7.Thống kê tổng số bài viết theo danh mục
export const totalArticleByCategory = async () => {
  const { data, error } = await supabase
    .from("articles")
    .select(`id, id_category_articles(name)`);
  if (error) throw error;
  const statistical: Record<string, number> = {};
  data.forEach((item: any) => {
    const category = item.id_category_articles?.name ?? "Chưa phân loại";
    statistical[category] = (statistical[category] || 0) + 1;
  });
  const total = Object.values(statistical).reduce((a, b) => a + b, 0);
  const colors = [
    "#002868",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#753df7",
    "#d2dae6",
  ];
  return Object.entries(statistical).map(([category, count], index) => ({
    value: count,
    label: category,
    text: `${Math.round((count / total) * 100)}%`,
    color: colors[index % colors.length],
  }));
};

//8.Thống kê tổng số bài nhạc
export const totalMusic = async () => {
  const { count, error } = await supabase
    .from("musics")
    .select("*", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
};
