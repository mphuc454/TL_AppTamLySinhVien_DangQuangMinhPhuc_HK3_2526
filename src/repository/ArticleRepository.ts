import { supabase } from "../lib/supabase";
import { Article } from "../models/Article";

//1. lấy danh sách bài viết từ cơ sở dữ liệu
export const getArticles = async (): Promise<Article[]> => {
  const { data, error } = await supabase
    .from("articles")
    .select("*, category_articles(id, name)");
  if (error) throw error;
  return data ?? [];
};
