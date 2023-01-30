/* eslint-disable import/extensions */
import express from 'express';
import {
  getAllUsers, getUserById, updateUser, deleteUser,
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/find/:userId', getUserById);
router.put('/update/:userId', updateUser);
router.delete('/delete/:userID', deleteUser);

export default router;
