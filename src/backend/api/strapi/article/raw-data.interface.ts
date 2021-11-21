export interface ApiStrapiArticleRawDataInterface {
  id: string;
  slug: string;
  title: string;
  content: string;
  description: string;
  published_at: string;
  category: {
    id: string;
    name: string;
  };
}
