import { supabase } from "../lib/supabase";
import { CategoryArticle } from "../models/CategoryArticle";

//1. lấy danh sách các thể loại bài viết từ cơ sở dữ liệu
export const getCategoryArticles = async (): Promise<CategoryArticle[]> => {
  const { data, error } = await supabase.from("category_articles").select("*");
  if (error) throw error;
  return data ?? [];
};
