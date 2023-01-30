/* eslint-disable no-unused-vars */
export const contactUs = (req, res, next) => {
  res.send('contact us');
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
