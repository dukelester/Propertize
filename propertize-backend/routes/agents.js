/* eslint-disable import/extensions */
import express from 'express';
import {
  getAllAgents, getAgentById, createAgent, updateAgent, deleteAgent,
} from '../controllers/agents.js';

const router = express.Router();

router.get('/', getAllAgents);
router.get('/find/:agentId', getAgentById);
router.post('/', createAgent);
router.put('/update/:agentId', updateAgent);
router.delete('/delete/:agentId', deleteAgent);

export default router;
