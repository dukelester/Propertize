/* eslint-disable import/no-extraneous-dependencies */

import * as dotenv from 'dotenv';

dotenv.config();


const port = process.env.PORT;

app.listen(port, (error) => {
  if (error) {
    throw new Error();
  }
  console.log(`The server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('<h2>here we go</h2>');
});
