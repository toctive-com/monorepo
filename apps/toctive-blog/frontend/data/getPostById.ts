import { PostI } from '@toctive/toctive-blog';
import axios from 'axios';

export const getPostById = async ({
  id,
}: {
  id: string;
}): Promise<PostI | null> => {
  try {
    const url = `/posts/${id}`;
    const res = await axios.get(url);
    return res.data.data;
  } catch (error) {
    return null;
  }
};
