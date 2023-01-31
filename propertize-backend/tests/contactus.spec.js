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
        expect(res.body).toStrictEqual({});
    });
  });
  describe('post request to /api/contact-us', () => {
    describe('creating a contact to the api/contact-us/', () => {
        it('should return an 200 status ok for a right data', async () => {
            const res = await request(app).post(`/api/contact-us/new`)
            .send({
                "category": "House inquiry",
                "subject": "Housing",
                "name": "Master Ken",
                "email": "kensmaster@gmail.com",
                "phone": "0700507822",
                "message": "What is the best price for a deposit and a nice house?"
            });
            expect(res.statusCode).toBe(201);
            expect(res.body.category).toStrictEqual('House inquiry');
            expect(res.body.name).toStrictEqual('Master Ken');
            expect(res.body.email).toStrictEqual('kensmaster@gmail.com');
            expect(res.body.message).toStrictEqual('What is the best price for a deposit and a nice house?');
        });
    });
    describe('creating a contact with no body', () => {
        it('should return an 200 status ok for a right data', async () => {
            const res = await request(app).post(`/api/contact-us/new`)
            .send({});
            expect(res.statusCode).toBe(500);
        });
    });
});
})
