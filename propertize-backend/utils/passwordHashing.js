/* eslint-disable import/no-extraneous-dependencies */
import bcrypt from 'bcrypt';

export const hashUserPassword = (password) => {
  const salt = bcrypt.genSaltSync(12);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const isPasswordCorrect = (password, userPass) => bcrypt.compareSync(password, userPass);
