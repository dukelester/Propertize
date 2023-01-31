import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import request from 'supertest';
import createServer from '../utils/createServer.js';

const app = createServer();

dotenv.config();

beforeEach( async () => {
  await mongoose.connect(process.env.MONGO);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe('Contact us route', () => {
  describe('getting all contacts /api/contact-us', () => {
    it('should return a list of contacts with 200 status code', async () => {
        const res = await request(app).get('/api/contact-us');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(1)
    });
  });
  describe('getting a specific contact /api/contact-us/find/:contactId', () => {
    it('should return a specific contact message with a status 200 ok', async () => {
        const contactId = '63d8a1282ce18a93be4fc4b4';
        const res = await request(app).get(`/api/contact-us/find/${contactId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body._id).toStrictEqual(contactId);
    });
  });
  describe('getting a specific contact /api/contact-us/find/:contactId', () => {
    it('should return an error message for not found contact', async () => {
        const contactId = '63d8a1282ce18a93fc4b4';
        const res = await request(app).get(`/api/contact-us/find/${contactId}`);
        expect(res.statusCode).toBe(500);
    });

  });

})
