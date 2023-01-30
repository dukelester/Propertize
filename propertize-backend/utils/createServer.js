import express from 'express';
import cookieParser from 'cookie-parser';

const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  return app;
};

export default createServer;
