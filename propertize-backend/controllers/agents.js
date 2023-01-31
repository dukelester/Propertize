/* eslint-disable import/extensions */
import Agent from '../models/Agent.js';

export const createAgent = async (req, res, next) => {
  try {
    const newAgent = await Agent.create(req.body);
    const savedAgent = await newAgent.save();
    res.status(201).json(savedAgent);
  } catch (error) {
    next(error);
  }
};

export const getAllAgents = async (req, res, next) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    next(error);
  }
};

export const getAgentById = async (req, res, next) => {
  try {
    const { agentId } = req.params;
    const agent = await Agent.findById(agentId);
    res.status(200).json(agent);
  } catch (error) {
    next(error);
  }
};

export const updateAgent = async (req, res, next) => {
  try {
    const { agentId } = req.params;
    const updatedAgent = await Agent.findByIdAndUpdate(agentId, { $set: req.body }, { new: true });
    res.status(200).json(updatedAgent);
  } catch (error) {
    next(error);
  }
};

export const deleteAgent = async (req, res, next) => {
  try {
    const { agentId } = req.params;
    await Agent.findByIdAndDelete(agentId);
    res.status(200).json({
      status: 200,
      success: true,
      message: `Agent with the id ${agentId} has been deleted sucessfully!`,
    });
  } catch (error) {
    next(error);
  }
};
