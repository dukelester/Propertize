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
          expect(res.statusCode).toBe(201);
          expect(res.body.username).toStrictEqual('henry002');
          expect(res.body.email).toStrictEqual('henry034@gmail.com');
          expect(res.body.password.length).toBe(60);
        });
      })
  });
  describe('user login', () => {
    describe('user login with invalid username', () => {
      it('should return an error 404 user not found', async () => {
        const res = await request(app).post('/api/auth/login').send({
          "username": "freadts",
          "password": "er78922oiuytyu2",
        });
        expect(res.statusCode).toBe(404);
        expect(res.body).toStrictEqual({});
      });
    });
    describe('user login with invalid password', () => {
      it('should return an error 404 user not found', async () => {
        const res = await request(app).post('/api/auth/login').send({
          "username": "jamesmaj",
          "password": "er78922oiuytyu2",
        });
        expect(res.statusCode).toBe(404);
        expect(res.body).toStrictEqual({});
      });
    });
    describe('user login with valid credentials for username and password', () => {
      it('should return 200 ok success status code with user details', async () => {
        const res = await request(app).post('/api/auth/login').send({
          "username": "djangoapis",
          "password": "duke2030",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.username).toStrictEqual('djangoapis');
        expect(res.body.status).toStrictEqual('Active');
      });
    });
    describe('user login with valid credentials for username and password without email confirmation', () => {
      it('should return 401 error for a user who is not active', async () => {
        const res = await request(app).post('/api/auth/login').send({
          "username": "lester24562",
          "password": "duke2030",
        });
        expect(res.statusCode).toBe(401);
      });
    });
  });
});
