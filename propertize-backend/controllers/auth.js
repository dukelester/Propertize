/* eslint-disable import/extensions */
import User from '../models/User.js';
import { hashUserPassword } from '../utils/passwordHashing.js';

/* eslint-disable no-unused-vars */
export const userRegister = async (req, res, next) => {
  try {
    const {
      username, email, phone, firstName,
      latsName, about, photo, socialLinks, password,
    } = req.body;
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

export const userLogin = (req, res, next) => {
  res.send({ message: 'user login' });
};

export const passwordReset = (req, res, next) => {
  res.send({ message: 'user password reset' });
};

export const passwordResetConfirm = (req, res, next) => {
  res.send({ message: 'user password reset confirmation' });
};
