import { getCategoryArticles } from "../repository/CategoryArticleRepository";

export class CategoryArticlesViewModel {
  async loadCategoryArticles() {
    return await getCategoryArticles();
  }
}
