export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type RelatedItem = {
  __type: string;
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type CoverImage = Image & {
  related: RelatedItem[];
};

export interface ParagraphChild {
  type: "text" | "link";
  text?: string; // For plain text
  url?: string;  // For links
  bold?: boolean; // Optional, for bold text
  children?: ParagraphChild[]; // For nested structures (e.g., links containing text)
}


export type Paragraph = {
  type: string;
  format?: string;
  children: ParagraphChild[];
};

export type File ={
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  formats?: Record<string, unknown> | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: Record<string, unknown> | null;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
}

export type ArticleParagraph = {
  __component: "article.paragraph";
  id: number;
  paragraph: Paragraph[];
};

export type ArticleSingleImage = {
  __component: "article.single-image";
  id: number;
  image: Image;
};

export type ArticleMultipleImages = {
  __component: "article.multiple-images";
  id: number;
  images: Image[];
};

export interface ArticleFile {
  __component: "article.file";
  id: number;
  file: File;
}

export type ArticleContent = ArticleParagraph | ArticleSingleImage | ArticleMultipleImages | ArticleFile;

export type Business = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover?: CoverImage;
  content: ArticleContent[];
};
