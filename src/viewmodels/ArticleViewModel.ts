import { useEffect, useState } from "react";
import { Article } from "../models/Article";
import {
  getArticleByID,
  getArticles,
  inscreaseView,
} from "../repository/ArticleRepository";

// lấy danh sách bài viết
export function useArticleViewModel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const loadArticles = async () => {
    try {
      setLoading(true);
      const data = await getArticles();
      setArticles(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadArticles();
  }, []);

  return { articles, loading };
}
// lấy chi tiết bài viết
export function useArticleDetailViewModel(id: number) {
  const [arc, setArc] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadExercisesDetail = async () => {
      try {
        setLoading(true);
        const data = await getArticleByID(id);
        setArc(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadExercisesDetail();
  }, [id]);

  return { arc, loading };
}

export function useViewsbyUserViewModel(id: number) {
  useEffect(() => {
    if (!id || Number.isNaN(id)) return;

    const totalView = async () => {
      try {
        await inscreaseView(id);
      } catch (err) {
        console.log(err);
      }
    };

    totalView();
  }, [id]);
}
