export interface ArticleResult {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  author: null | string;
  title: null | string;
  description: null | string;
  url: string;
  urlToImage: null | string;
  publishedAt: string;
  content: string;
}

