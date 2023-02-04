const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 10 || phoneNumber.at(0) !== '0') {
    throw new Error('Invalid phone number');
  }
  return `+254${phoneNumber.slice(1)}`;
};

export default formatPhoneNumber;


console.log(formatPhoneNumber('07456782'))