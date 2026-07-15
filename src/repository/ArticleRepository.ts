import { supabase } from "../lib/supabase";
import { Article } from "../models/Article";

//1. lấy danh sách bài viết từ cơ sở dữ liệu
export const getArticles = async (): Promise<Article[]> => {
  const { data, error } = await supabase
    .from("articles")
    .select("*, id_category_articles(id, name)");
  if (error) throw error;
  return data ?? [];
};

//2. lấy chi tiết 1 bài viết từ cơ sở dữ liệu
export const getArticleByID = async (id: number) => {
  const { data, error } = await supabase
    .from("articles")
    .select(`*,id_category_articles(id, name) `)
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
};

//3.Thống kê tổng số bài viết
export const totalArticle = async () => {
  const { count, error } = await supabase
    .from("articles")
    .select("*", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
};

//4.Thống kê tổng số bài viết theo danh mục
export const totalArticleByCategory = async () => {
  const { data, error } = await supabase
    .from("articles")
    .select(`id, id_category_articles(name)`);
  if (error) throw error;
  const statistical: Record<string, number> = {};
  data.forEach((item: any) => {
    const category = item.id_category_articles.name;
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

//6. Bài viết tăng lượt xem
export const inscreaseView = async (id: number) => {
  const { data, error } = await supabase
    .from("articles")
    .select("views")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  const { error: upadateError } = await supabase
    .from("articles")
    .update({ views: (data.views ?? 0) + 1 })
    .eq("id", id);
  if (upadateError) {
    throw new Error(upadateError.message);
  }
};

//7. Thêm bài viết
export const insertArticle = async (
  id_category_articles: number,
  title: string,
  thumbnail: string,
  content: string,
  name_author: string,
  time_to_read: number,
) => {
  const { data, error } = await supabase
    .from("articles")
    .insert({
      id_category_articles,
      title,
      thumbnail,
      content,
      name_author,
      time_to_read,
    })
    .select()
    .single();
  if (error) {
    throw error;
  }

  return data;
};

//8. Xoá bài viết
export const deleteArticle = async (id: number): Promise<void> => {
  const { error } = await supabase.from("articles").delete().eq("id", id);
  if (error) {
    throw error;
  }
};

//9. cập nhật bài viết

export async function updateArticle(
  id: number,
  id_category_articles: number,
  title: string,
  thumbnail: string,
  content: string,
  name_author: string,
  time_to_read: number,
) {
  const { error } = await supabase
    .from("articles")
    .update({
      id_category_articles,
      title,
      thumbnail,
      content,
      name_author,
      time_to_read,
      updated_at: new Date(),
    })
    .eq("id", id);

  if (error) throw error;
}
