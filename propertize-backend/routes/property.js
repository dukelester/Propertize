import express from 'express';
import {
  createProperty, deleteProperty, getAllProperties, getPropertyById, updateProperty,
} from '../controllers/property';

const router = express.Router();

router.get('/', getAllProperties);
router.get('/find/:propertyId', getPropertyById);
router.post('/', createProperty);
router.put('/update/:propertyId', updateProperty);
router.delete('/delete/:propertyId', deleteProperty);

export default router;
