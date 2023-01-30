/* eslint-disable no-unused-vars */

export const getAllUsers = (req, res, next) => {
  res.send({ message: 'All Users' });
};

export const getUserById = (req, res, next) => {
  res.send({ message: 'get User details' });
};

export const updateUser = (req, res, next) => {
  res.send({ message: 'update the User details' });
};

export const deleteUser = (req, res, next) => {
  res.send({ message: 'delete the User details' });
};
