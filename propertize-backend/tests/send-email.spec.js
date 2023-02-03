import sendConfirmationEmail from '../utils/confirm-email.js';

describe('send email', () => {
  describe('email is sent during success registration', () => {
    it('should send an email to the user email', async () => {
      const res = await sendConfirmationEmail('dukelester', 'djangoapis2021@gmail.com', 'wertyuiop8763456892');
      expect(res.status).toBe(200);
    });
  });
});
