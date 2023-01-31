/* eslint-disable import/extensions */
import express from 'express';
import {
  getAllUsers, getUserById, updateUser, deleteUser,createUser,
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/new', createUser);
router.get('/find/:userId', getUserById);
router.put('/update/:userId', updateUser);
router.delete('/delete/:userID', deleteUser);

export default router;
