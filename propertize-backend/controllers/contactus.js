/* eslint-disable import/extensions */
import Contact from '../models/Contact.js';

/* eslint-disable no-unused-vars */
export const contactUs = async (req, res, next) => {
  try {
    const newContact = await Contact.create(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    next(error);
  }
};

export const allContacts = async (req, res, next) => {
  try {
    const listOfContacts = await Contact.find();
    res.status(200).json(listOfContacts);
  } catch (error) {
    next(error);
  }
};

export const contactDetails = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const found = await Contact.findById(contactId);
    res.status(200).json(found);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = (req, res, next) => {
  res.send({ message: 'Deleet contact' });
};
