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

describe('Users', () => {
  describe('testing the users routes /api/users/', () => {
    describe('get all users /users', () => {
      it('should return an array of availabe users with status 200 ok', async () => {
          const res = await request(app).get('/api/users');
          expect(res.statusCode).toBe(200);
          expect(res.body.length).toBeGreaterThan(1)
      });
    });
    describe('get user based on the user Id ', () => {
      it('should return the user details and 200 ok success ', async () => {
          const userId = '63d915fd20deae497824a7a0';
          const res = await request(app).get(`/api/users/find/${userId}`);
          expect(res.statusCode).toBe(200);
          expect(res.body._id).toBe(userId);
      });
    });
    describe('get user with a wrong user Id ', () => {
      it('should return an error where the user id is not found ', async () => {
          const userId = '63d915fd2deae497824a7a0';
          const res = await request(app).get(`/api/users/find/${userId}`);
          expect(res.statusCode).toBe(500);
          expect(res.body).toStrictEqual({});
      });
    });
  });
  describe('creating an user', () => {
    describe('creating an user and saving to the database', () => {
      it('should return a success 201 created message and the user details', async () => {
          const res = await request(app).post('/api/users/new').send({
            "email": "lester2@gmail.com",
            "username": "lester24562",
            "phone": "07342567822",
            "password": "duke22030"
          });
          expect(res.statusCode).toBe(201);
          expect(res.body.username).toStrictEqual('lester24562');
          expect(res.body.phone).toStrictEqual('07342567822');
          expect(res.body.email).toStrictEqual('lester2@gmail.com');
      });
  });
  describe('create an user without data', () => {
  it('should return an error if the body is not defined', async () => {
      const res = await request(app).post('/api/users/new').send({})
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toStrictEqual('Bad information format incomplete user details');
      expect(res.body.status).toBe(400);
  });
  });
  describe('create an user without complete data', () => {
    it('should return an error if the body is not defined', async () => {
        const res = await request(app).post('/api/users/new').send({
          "username": "johndoe",
          "password": "john2344",
        })
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toStrictEqual('Bad information format incomplete user details');
        expect(res.body.status).toBe(400);
    });
    });
  });
  describe('updating an user details', () => {
      describe('sending the right data to change the user given the id', () => {
        it('should return 200 ok success status code for a found and updated user', async () => {
          const userId = '63d99fa64194e57c81a1f1ee';
          const res = await request(app).put(`/api/users/update/${userId}`).send({
            "email": "dlesetr@gmail.com",
            "username": "dlester23",
          });
          expect(res.statusCode).toBe(200);
          expect(res.body.email).toStrictEqual('dlesetr@gmail.com');
          expect(res.body.username).toStrictEqual('dlester23');
        });
      });
      describe('trying to update an user with wrong Id', () => {
          it('should return an error while trying to update an user', async () => {
            const userId = '63d990ceabdc82dcbbd548';
            const res = await request(app).put(`/api/users/update/${userId}`);
            expect(res.statusCode).toBe(500);
            expect(res.body).toStrictEqual({});
          });
        })
  });
  describe('deleting a user details', () => {
      describe('delete an existing user with a given id', () => {
        it('should return 200 ok success status code ', async () => {
          const userId = '63d99f83fa830127ed594670';
          const res = await request(app).delete(`/api/users/delete/${userId}`);
          expect(res.statusCode).toBe(200);
          expect(res.body).toStrictEqual({
              status: 200,
              success: true,
              message: `User with the id 63d99f83fa830127ed594670 has been deleted sucessfully!`
          });
      });
      });
      describe('trying to delete a user with wrong Id', () => {
          it('should return an error while trying to update an user', async () => {
            const userId = '63d990ceabdc82dcbbd548';
            const res = await request(app).delete(`/api/users/delete/${userId}`);
            expect(res.statusCode).toBe(500);
            expect(res.body).toStrictEqual({});
          });
        });
  });
});

