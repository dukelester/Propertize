/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

import createServer from './utils/createServer.js';

dotenv.config();

const app = createServer();
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
  mongoose.connect(process.env.MONGO);
};

const port = process.env.PORT;

app.listen(port, (error) => {
  if (error) {
    throw new Error();
  }
  dbConnect();
  console.log(`The server is running at http://localhost:${port}`);
});
