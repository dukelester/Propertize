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

describe('users', () => {
    describe('testing the users routes /api/users/', () => {
      describe('get all users /users', () => {
        it('should return an array of availabe users with status 200 ok', async () => {
            const res = await request(app).get('/api/users');
            expect(res.statusCode).toBe(200);
        });
      });
    });
});
