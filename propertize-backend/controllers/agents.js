/* eslint-disable no-unused-vars */
export const createAgent = (req, res, next) => {
  res.send({ message: 'Create new Agent' });
};

export const getAllAgents = (req, res, next) => {
  res.send({ message: 'All agents' });
};

export const getAgentById = (req, res, next) => {
  res.send({ message: 'get agent details' });
};

export const updateAgent = (req, res, next) => {
  res.send({ message: 'update the agent details' });
};

export const deleteAgent = (req, res, next) => {
  res.send({ message: 'delete the agent details' });
};
