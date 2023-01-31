/* eslint-disable import/extensions */
import Contact from '../models/Contact.js';

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

export const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    await Contact.findByIdAndDelete(contactId);
    res.status(200).json({
      status: 200,
      success: true,
      message: `Contact with the id ${contactId} has been deleted sucessfully!`,
    });
  } catch (error) {
    next(error);
  }
};
