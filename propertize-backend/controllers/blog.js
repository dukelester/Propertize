import Blog from '../models/Blog.js';

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlogDetails = async (req, res, next) => {
  res.send('get a blog details');
};

export const createNewBlog = async (req, res, next) => {
  try {
    const newBlog = await Blog.create(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
};
