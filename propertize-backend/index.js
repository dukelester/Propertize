/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

import * as dotenv from 'dotenv';
import createServer from './utils/createServer.js';

dotenv.config();

const app = createServer();

const port = process.env.PORT;

app.listen(port, (error) => {
  if (error) {
    throw new Error();
  }
  console.log(`The server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send({
    message: 'duke lester is guru',
  });
});
