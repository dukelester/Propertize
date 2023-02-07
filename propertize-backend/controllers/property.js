/* eslint-disable import/extensions */
import Property from '../models/Property.js';

export const createProperty = async (req, res, next) => {
  try {
    const newProperty = await Property.create(req.body);
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    next(error);
  }
};

export const getAllProperties = async (req, res, next) => {
  try {
    const allProperties = await Property.find();
    res.status(200).json(allProperties);
  } catch (error) {
    next(error);
  }
};

export const getPropertyById = async (req, res, next) => {
  try {
    const { propertyId } = req.params;
    const foundProperty = await Property.findById(propertyId);
    res.status(200).json(foundProperty);
  } catch (error) {
    next(error);
  }
};

export const updateProperty = async (req, res, next) => {
  try {
    const { propertyId } = req.params;
    const updatedProperty = await Property.findOneAndUpdate(
      propertyId,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedProperty);
  } catch (error) {
    next(error);
  }
};

export const deleteProperty = async (req, res, next) => {
  try {
    const { propertyId } = req.params;
    await Property.findByIdAndDelete(propertyId);
    res.status(200).json({
      status: 200,
      success: true,
      message: `Property with the id ${propertyId} has been deleted sucessfully!`,
    });
  } catch (error) {
    next(error);
  }
};

export const getFeaturedProperty = async (req, res, next) => {
  try {
    const featured = await Property.find({ featured: true});
    res.status(200).json(featured);
  } catch (error) {
      next(error);
  };
}