import { supabase } from "../lib/supabase";
import { Article } from "../models/Article";

export const getArticles = async (): Promise<Article[]> => {
  const { data, error } = await supabase.from("articles").select("*");

  if (error) throw error;

  return data ?? [];
};
