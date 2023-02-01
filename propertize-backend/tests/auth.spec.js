/* eslint-disable import/extensions */
import request from 'supertest';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import createServer from '../utils/createServer.js';

dotenv.config();
const app = createServer();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Authentication', () => {
  describe('User registration', () => {
    describe('register a user without a body', () => {
      it('should return an error for 400 bad request', async () => {
        const res = await request(app).post('/api/auth/register').send({});
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toStrictEqual('Bad information format');
        expect(res.body.status).toBe(400);
      });
    });
    describe('register a user without a complete body', () => {
        it('should return an error for 400 bad request', async () => {
          const res = await request(app).post('/api/auth/register').send({
            "username": "lesterkiamba",
            "phone": "0845678922",
          });
          expect(res.statusCode).toBe(400);
          expect(res.body.message).toStrictEqual('Bad information format');
          expect(res.body.status).toBe(400);
        });
      })
      describe('register a user with a complete body', () => {
        it('should return a success 201 created', async () => {
          const res = await request(app).post('/api/auth/register').send({
            "username": "henry002",
            "phone": "0734562250",
            "password": "duke2030",
            "email": "henry034@gmail.com"
          });
          console.log(res.body)
          expect(res.statusCode).toBe(201);
          expect(res.body.username).toStrictEqual('henry002');
          expect(res.body.email).toStrictEqual('henry034@gmail.com');
          expect(res.body.password.length).toBe(60);
        });
      })
  });
  
})
