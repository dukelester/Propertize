/* eslint-disable import/extensions */
import Blog from '../models/Blog.js';
import createError from '../utils/error.js';

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlogDetails = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    const foundBlog = await Blog.findById(blogId);
    if (!foundBlog) return next(createError(404, `Blog with the id ${blogId} not found `));
    res.status(200).json(foundBlog);
  } catch (error) {
    next(error);
  }
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

export const updateBlogById = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    const toBeUpdated = await Blog.findByIdAndUpdate(blogId, { $set: req.body }, { new: true });
    res.status(200).json(toBeUpdated);
  } catch (error) {
    next(error);
  }
};

export const deleteBlogById = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    await Blog.findByIdAndDelete(blogId);
    res.status(200).json({
      status: 200,
      message: `The blog with the Id ${blogId} was deleted successfully!`,
    });
  } catch (error) {
    next(error);
  }
};
