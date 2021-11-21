import { ApiStrapiArticleRawDataInterface } from 'backend/api/strapi/article/raw-data.interface';
import { ArticleModelInterface } from 'model/article.interface';

export const ApiArticleTransformer = (articles: ApiStrapiArticleRawDataInterface[]): ArticleModelInterface[] =>
  articles.map((article) => ({
    title: article.title,
    content: article.content,
    publishedAt: new Date(article.published_at),
    categoryText: article.category.name,
  }));
