/* eslint-disable import/extensions */
import express from 'express';
import multer from 'multer';
import {
  getAllAgents, getAgentById, createAgent, updateAgent, deleteAgent,
} from '../controllers/agents.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getAllAgents);
router.get('/find/:agentId', getAgentById);
router.post('/new', upload.single('photo'), createAgent);
router.put('/update/:agentId', updateAgent);
router.delete('/delete/:agentId', deleteAgent);

export default router;
