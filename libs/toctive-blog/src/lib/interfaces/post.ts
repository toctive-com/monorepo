export interface PostI {
  id?: string;
  title: string;
  content: string;
  author: string;
  thumbnail?: string;
  summary?: string;
  createdAt: Date;
  updatedAt?: Date;
}
