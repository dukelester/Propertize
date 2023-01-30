/* eslint-disable no-unused-vars */
export const createProperty = (req, res, next) => {
  res.send({ message: 'Create new Property' });
};

export const getAllProperties = (req, res, next) => {
  res.send({ message: 'All Properties' });
};

export const getPropertyById = (req, res, next) => {
  res.send({ message: 'get Property details' });
};

export const updateProperty = (req, res, next) => {
  res.send({ message: 'update the Property details' });
};

export const deleteProperty = (req, res, next) => {
  res.send({ message: 'delete the Property details' });
};
