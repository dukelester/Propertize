import createError from './error.js'
const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 10 || phoneNumber.at(0) !== '0') {
    throw new Error();
  }
  return `+254${phoneNumber.slice(1)}`;
};

export default formatPhoneNumber;
