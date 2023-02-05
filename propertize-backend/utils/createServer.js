/* eslint-disable import/extensions */
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import agentsRouter from '../routes/agents.js';
import contactRouter from '../routes/contactus.js';
import usersRouter from '../routes/users.js';
import authRouter from '../routes/auth.js';
import propertyRouter from '../routes/property.js';
import blogRouter from '../routes/blog.js';

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/agents', agentsRouter);
  app.use('/api/contact-us', contactRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/', propertyRouter);
  app.use('/api/blogs', blogRouter);
  return app;
};

export default createServer;
