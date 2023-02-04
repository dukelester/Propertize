/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
import express from 'express';
import multer from 'multer';
import {

  getAllBlogs, createNewBlog, getBlogDetails, updateBlogById, deleteBlogById,
} from '../controllers/blog.js';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.get('/', getAllBlogs);
router.post('/new', upload.single('image'), createNewBlog);
router.get('/find/:blogId', getBlogDetails);
router.put('/update/:blogId', updateBlogById);
router.delete('/delete/:blogId', deleteBlogById);
export default router;
