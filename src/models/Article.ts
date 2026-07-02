import { CategoryArticle } from "./CategoryArticle";

export interface Article {
  id: number;
  title: string;
  thumbnail: string;
  content: string;
  name_author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  time_to_read: number;
  id_category_articles: number;
  category_articles: CategoryArticle;
}
