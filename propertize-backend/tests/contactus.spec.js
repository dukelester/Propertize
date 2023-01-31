import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

beforeEach( async () => {
  await mongoose.connect(process.env.MONGO);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe('Contact us route', () => {
  describe('getting all contacts /', () => {
    it('should return a list of contacts with 200 status code', async () => {
        console.log('testing ....')
    });
    
  })

})
