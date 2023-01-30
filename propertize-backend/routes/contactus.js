/* eslint-disable import/extensions */
import express from 'express';
import * as contactusJs from '../controllers/contactus.js';

const router = express.Router();

router.get('/', contactusJs.allContacts);
router.post('/new', contactusJs.contactUs);
router.get('/find/:contactId', contactusJs.contactDetails);
router.delete('/delete/:contactId', contactusJs.deleteContact);
