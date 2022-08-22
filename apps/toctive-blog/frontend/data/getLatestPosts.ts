import { PostI } from '@toctive/toctive-blog';
import axios from 'axios';

export const getLatestPosts = async ({
  limit = 4,
  category = null,
}: {
  limit?: number;
  category?: string | null;
}): Promise<PostI[]> => {
  const url = '/posts';
  const res = await axios.get(url, { params: { category, limit } });
  return res.data.data;
};
