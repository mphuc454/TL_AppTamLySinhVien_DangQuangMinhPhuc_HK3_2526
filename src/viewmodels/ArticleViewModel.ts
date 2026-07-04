import { useEffect, useState } from "react";
import { Article } from "../models/Article";
import { getArticles } from "../repository/ArticleRepository";

export function useArticleViewModel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const loadArticles = async () => {
    try{
      setLoading(true)
      const data = await getArticles();
      setArticles(data);
    }catch(error){
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
    useEffect(() => {
          loadArticles();
      }, []);

      return {articles, loading, loadArticles};
}
