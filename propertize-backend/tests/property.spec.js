/* eslint-disable import/extensions */
import request from 'supertest';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import createServer from '../utils/createServer.js'

dotenv.config();
const app = createServer();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Properties', () => {
    describe('testing the properties routes /api/', () => {
      describe('get all properties /api/', () => {
        it('should return an array of availabe properties with status 200 ok', async () => {
            const res = await request(app).get('/api');
            expect(res.statusCode).toBe(200);
        });
      });
    });
});
