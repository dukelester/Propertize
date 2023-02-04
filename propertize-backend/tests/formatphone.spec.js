import formatPhoneNumber from '../utils/formatphone.js';

describe('formating a phone number', () => {
  describe('format a number to return the desired output', () => {
    it('should return a phone number formatted in kenyan format', () => {
      expect(formatPhoneNumber('0745722340')).toStrictEqual('+254745722340');
      console.log('testing', formatPhoneNumber('074572230'))
    });
  });
  describe('formatting an invalid phone number', () => {
    it('should return an error', () => {
      expect(formatPhoneNumber('045722340')).toStrictEqual('Invalid phone number');
    });
  });
  describe('formatting an invalid phone number', () => {
    it('should return an error', () => {
      expect(formatPhoneNumber('745722340')).toThrow('Invalid phone number');
      console.log(formatPhoneNumber('745722340'), 'hererr');
    });
  });
  describe('formatting an invalid phone number', () => {
    it('should return an error for an invalid phone number', () => {
      expect(formatPhoneNumber('074572238940')).toThrow('Invalid phone number');
    });
  });
});
