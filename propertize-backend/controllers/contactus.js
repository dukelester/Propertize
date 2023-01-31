/* eslint-disable import/extensions */
import Contact from '../models/Contact.js';

/* eslint-disable no-unused-vars */
export const contactUs = async (req, res, next) => {
  try {
    if (req.body) {
      const newContact = await Contact.create(req.body);
      const savedContact = await newContact.save();
      res.status(201).json(savedContact);
    } else {
      res.status(400).json({ message: ' Bad information format!' });
    }
  } catch (error) {
    next(error);
  }
};

export const allContacts = (req, res, next) => {
  res.send({ message: 'All the contact us messages' });
};

export const contactDetails = (req, res, next) => {
  res.send({ message: 'Info about the contact us' });
};

export const deleteContact = (req, res, next) => {
  res.send({ message: 'Deleet contact' });
};
