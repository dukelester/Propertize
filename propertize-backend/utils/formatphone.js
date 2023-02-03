const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length !== 10 || phoneNumber.length > 12 || phoneNumber.at(0) !== '0') {
    return 'invalid phone';
  }
  return `+254${phoneNumber.slice(1)}`;
};

console.log(formatPhoneNumber('07345678'));
console.log(formatPhoneNumber('0734567800720'));
console.log(formatPhoneNumber('799443070'));
console.log(formatPhoneNumber('0799443070'));
