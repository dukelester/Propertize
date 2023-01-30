/* eslint-disable import/extensions */
import express from 'express';
import {
  passwordReset, passwordResetConfirm, userLogin, userRegister,
} from '../controllers/auth.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/password-reset', passwordReset);
router.get('/password-confirm', passwordResetConfirm);

export default router;
