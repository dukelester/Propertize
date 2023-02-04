/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
import express from 'express';
import { getAllBlogs, createNewBlog } from '../controllers/blog.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.post('/new', createNewBlog);
export default router;
