/* eslint-disable no-unused-vars */
export const userRegister = (req, res, next) => {
  res.send({ message: 'user registration' });
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
