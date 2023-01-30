import express from 'express';
import cookieParser from 'cookie-parser';

import agentsRouter from '../routes/agents.js';

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use('/agents', agentsRouter);
  return app;
};

export default createServer;
