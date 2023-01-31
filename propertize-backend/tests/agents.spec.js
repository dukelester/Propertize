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

describe('Agents', () => {
    describe('testing the agents routes /api/agents/', () => {
      describe('get all agents /agents', () => {
        it('should return an array of availabe agents with status 200 ok', async () => {
            const res = await request(app).get('/api/agents');
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBeGreaterThan(1)
        });
      });
    });
});
