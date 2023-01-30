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
  app.use('/agents', agentsRouter);
  app.use('/contact-us', contactRouter);
  app.use('/users', usersRouter);
  app.use('/auth', authRouter);
  app.use('/', propertyRouter);
  return app;
};

export default createServer;
