import { getArticles } from "../repository/ArticleRepository";

export class ArticleViewModel {
  async loadArticles() {
    return await getArticles();
  }
}
