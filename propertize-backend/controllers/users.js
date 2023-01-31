/* eslint-disable import/extensions */
import User from '../models/User.js';

export const createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const foundUser = await User.findById(userId);
    res.status(200).json(foundUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(userId, { $set: req.body }, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      status: 200,
      success: true,
      message: `User with the id ${userId} has been deleted sucessfully!`,
    });
  } catch (error) {
    next(error);
  }
};
