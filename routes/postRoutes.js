// routes/postRoutes.js
import express from 'express';
import { createPost, getPosts, getPost, likePost, commentOnPost } from '../controllers/postControllers.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

// Post routes
router.post('/posts', auth,createPost);
router.get('/posts', auth, getPosts);
router.get('/posts/:id', auth, getPost);
router.post('/posts/:postId/like', auth, likePost); 
router.post('/posts/:postId/comment', auth, commentOnPost); 
export default router;
