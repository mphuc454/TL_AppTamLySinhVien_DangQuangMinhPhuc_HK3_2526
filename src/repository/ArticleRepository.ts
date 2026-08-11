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

//3. Bài viết tăng lượt xem
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

//4. Thêm bài viết
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

//5. Xoá bài viết
export const deleteArticle = async (id: number): Promise<void> => {
  const { error } = await supabase.from("articles").delete().eq("id", id);
  if (error) {
    throw error;
  }
};

//6. cập nhật bài viết

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
