import formatPhoneNumber from '../utils/formatphone.js';

describe('formating a phone number', () => {
  describe('format a number to return the desired output', () => {
    it('should return a phone number formatted in kenyan format', () => {
      expect(formatPhoneNumber('0745722340')).toStrictEqual('+254745722340');
    });
  });
  describe('formatting an invalid phone number', () => {
    it('should return a phone number formatted in kenyan format', () => {
      expect(formatPhoneNumber('045722340')).toStrictEqual('invalid phone');
    });
  });
  describe('formatting an invalid phone number', () => {
    it('should return a phone number formatted in kenyan format', () => {
      expect(formatPhoneNumber('745722340')).toStrictEqual('invalid phone');
    });
  });
});
