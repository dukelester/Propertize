/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

import createServer from './utils/createServer.js';

dotenv.config();

const app = createServer();
const port = process.env.PORT;

mongoose.connection.on('connected', () => {
  console.log('database connected successfully');
});
mongoose.connection.on('disconnected', async (error) => {
  if (error) {
    console.log('Database has been Disconnected!');
    throw new Error();
  }
  await mongoose.connection.close();
});

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error(error);
  }
};

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || ' Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.listen(port, (error) => {
  if (error) {
    throw new Error();
  }
  dbConnect();
  console.log(`The server is running at http://localhost:${port}`);
});
