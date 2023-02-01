import { hashUserPassword } from "../utils/passwordHashing.js";

describe('password hashing', () => {
  describe('hashing a user password using the bcryp', () => {
    it('shoul return a hash for the password', () => {
        const password = 'duke1244';
        expect(hashUserPassword(password).length).toBe(60);
        // $2b$12$LSVcaXXcMPJajnYWO.Xl7OSgFBGvfwE8EicNLcu0ZNo/d2xJNa8DG
    });
  });
});
