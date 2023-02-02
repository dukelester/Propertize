/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */

import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import { hashUserPassword, isPasswordCorrect } from '../utils/passwordHashing.js';
import createError from '../utils/error.js';

export const userRegister = async (req, res, next) => {
  try {
    const {
      username, email, phone, firstName,
      latsName, about, photo, socialLinks, password,
    } = req.body;
    const userToken = jwt.sign({ email }, process.env.JWT_SECRETE_KEY);
    console.log(userToken);
    if (username && email && phone && password) {
      const newUser = new User({
        username,
        email,
        phone,
        firstName,
        latsName,
        about,
        photo,
        socialLinks,
        password: hashUserPassword(password),
        confirmationCode: userToken,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } else {
      res.status(400).json({
        success: false,
        status: 400,
        message: 'Bad information format',
      });
    }
  } catch (error) {
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      const foundUser = await User.findOne({ username });
      if (foundUser.status !== 'Active') return next(createError(401, 'Pending Account. Please Verify Your Email!'));
      if (!foundUser) return next(createError(404, 'User not found'));
      if (!isPasswordCorrect(password, foundUser.password)) {
        return next(createError(
          404,
          'Sorry, you have entered wrong user credentials',
        ));
      }
      const { password: userPassword, isAdmin, ...otherDetails } = foundUser._doc;
      const token = jwt.sign({
        id: foundUser._id,
        isAdmin: foundUser.isAdmin,
      }, process.env.JWT_SECRETE_KEY);
      res.cookie('access_token', token, { httpOnly: true }).status(200).json({ ...otherDetails });
    } else {
      res.status(400).json({
        success: false,
        status: 400,
        message: 'Bad information format',
      });
    }
  } catch (error) {
    next(error);
  }
};

export const passwordReset = (req, res, next) => {
  res.send({ message: 'user password reset' });
};

export const passwordResetConfirm = (req, res, next) => {
  res.send({ message: 'user password reset confirmation' });
};
