/* eslint-disable import/extensions */
import express from 'express';
import multer from 'multer';
import {
  getAllUsers, getUserById, updateUser, deleteUser, createUser,
} from '../controllers/users.js';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.get('/', getAllUsers);
router.post('/new', upload.single('photos'), createUser);
router.get('/find/:userId', getUserById);
router.put('/update/:userId', updateUser);
router.delete('/delete/:userID', deleteUser);

export default router;
