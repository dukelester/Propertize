/* eslint-disable import/extensions */
import express from 'express';
import multer from 'multer';
import {
  createProperty, deleteProperty, getAllProperties, getPropertyById, updateProperty,
} from '../controllers/property.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getAllProperties);
router.get('/find/:propertyId', getPropertyById);
router.post('/', upload.array('images'), createProperty);
router.put('/update/:propertyId', updateProperty);
router.delete('/delete/:propertyId', deleteProperty);

export default router;
