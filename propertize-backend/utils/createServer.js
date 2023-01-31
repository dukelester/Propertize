/* eslint-disable import/extensions */
import express from 'express';
import cookieParser from 'cookie-parser';

import agentsRouter from '../routes/agents.js';
import contactRouter from '../routes/contactus.js';
import usersRouter from '../routes/users.js';
import authRouter from '../routes/auth.js';
import propertyRouter from '../routes/property.js';

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use('/api/agents', agentsRouter);
  app.use('/api/contact-us', contactRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/', propertyRouter);
  return app;
};

export default createServer;
