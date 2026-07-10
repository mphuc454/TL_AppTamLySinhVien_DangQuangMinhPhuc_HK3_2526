import { useEffect, useState } from "react";
import { CategoryArticle } from "../models/CategoryArticle";
import { getCategoryArticles } from "../repository/CategoryArticleRepository";

export function useCategoryArticlesViewModel() {
  const [categoryArticles, setCategoryArticles] = useState<CategoryArticle[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const loadCategoryArticles = async () => {
    try {
      setLoading(true);
      const data = await getCategoryArticles();
      setCategoryArticles(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadCategoryArticles();
  }, []);
  return { categoryArticles, loading, loadCategoryArticles };
}
