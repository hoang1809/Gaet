import { ArticleContent, CoverImage } from "./business.interface";

export type Tag = {
  id: number,
  documentId: string,
  name: string,
  createdAt: string,
  updatedAt:string,
  publishedAt: string
}

export type News = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail?: CoverImage;
  content: ArticleContent[];
  tags?: Tag[];
};