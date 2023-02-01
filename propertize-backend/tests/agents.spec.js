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

describe('Agents', () => {
    describe('testing the agents routes /api/agents/', () => {
      describe('get all agents /agents', () => {
        it('should return an array of availabe agents with status 200 ok', async () => {
            const res = await request(app).get('/api/agents');
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBeGreaterThan(1)
        });
      });
      describe('get agent based on the agent Id ', () => {
        it('should return the agent details and 200 ok success ', async () => {
            const agentId = '63d915fd20deae497824a7a0';
            const res = await request(app).get(`/api/agents/find/${agentId}`);
            expect(res.statusCode).toBe(200);
            expect(res.body._id).toStrictEqual(agentId);
        });
      });
      describe('get agent with a wrong agent Id ', () => {
        it('should return an error where the agent id is not found ', async () => {
            const agentId = '63d915fd2deae497824a7a0';
            const res = await request(app).get(`/api/agents/find/${agentId}`);
            expect(res.statusCode).toBe(500);
            expect(res.body).toStrictEqual({});
        });
      });
    });
    describe('creating an agent', () => {
      describe('creating an agent and saving to the database', () => {
        it('should return a success 201 created message and the agent details', async () => {
            const res = await request(app).post('/api/agents/new').send({
                "company": "Nairobi Housing",
                "fullName": "James Macnin",
                "phone": "073456222",
                "email": "jamesmack@gmail.com",
                "agencyType": "Property Agency"
            });
            expect(res.statusCode).toBe(201);
            expect(res.body.fullName).toStrictEqual('James Macnin');
            expect(res.body.company).toStrictEqual('Nairobi Housing');
            expect(res.body.phone).toStrictEqual('073456222');
            expect(res.body.email).toStrictEqual('jamesmack@gmail.com');
        });
    });
    describe('create an agent without data', () => {
    it('should return an error if the body is not defined', async () => {
        const res = await request(app).post('/api/agents/new').send({})
        expect(res.statusCode).toBe(500);
    });
    });

    });
    describe('updating an agent details', () => {
        describe('sending the right data to change the agent given the id', () => {
          it('should return 200 ok success status code for a found and updated agent', async () => {
            const agentId = '63d91671c3e8a874bb2203fd';
            const res = await request(app).put(`/api/agents/update/${agentId}`).send({
                "company": "Juja Homes Lmitted",
                "fullName": "Frankline Kiamoko",
            });
            expect(res.statusCode).toBe(200);
            expect(res.body.fullName).toStrictEqual('Frankline Kiamoko');
            expect(res.body.company).toStrictEqual('Juja Homes Lmitted');
          });
        });
        describe('trying to update an agent with wrong Id', () => {
            it('should return an error while trying to update an agent', async () => {
              const agentId = '63d990ceabdc82dcbbd548';
              const res = await request(app).put(`/api/agents/update/${agentId}`);
              expect(res.statusCode).toBe(500);
              expect(res.body).toStrictEqual({});
            });
          })
    });
    describe('deleting an agent details', () => {
        describe('delete an exixting agent with a given id', () => {
          it('should return 200 ok success status code ', async () => {
            const agentId = '63d91629c3e8a874bb2203f8';
            const res = await request(app).delete(`/api/agents/delete/${agentId}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).toStrictEqual({
                status: 200,
                success: true,
                message: `Agent with the id ${agentId} has been deleted sucessfully!`
            });
        });
        });
        describe('trying to delete an agent with wrong Id', () => {
            it('should return an error while trying to update an agent', async () => {
              const agentId = '63d990ceabdc82dcbbd548';
              const res = await request(app).delete(`/api/agents/delete/${agentId}`);
              expect(res.statusCode).toBe(500);
              expect(res.body).toStrictEqual({});
            });
          });
    });

});
