import { Router } from 'express';
import { getAllPosts, getPost } from '../controllers/postController';
const router = Router();

// get all posts
router.get('/', getAllPosts);
router.get('/:postId', getPost);

export default router;
