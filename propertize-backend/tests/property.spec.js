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
            expect(res.body.length).toBeGreaterThan(1);
        });
      });
    });
    describe('testing the properties routes /api/find', () => {
      describe('get a property based on the id ', () => {
        it('should a property with status 200 ok ', async () => {
            const propertyId = '63da0cffefedb20066e0f7c4';
            const res = await request(app).get(`/api/find/${propertyId}`);
            expect(res.statusCode).toBe(200);
            expect(res.body._id).toStrictEqual(propertyId);
        });
      });
      describe('get a property based on the wrong id ', () => {
        it('should return an error and a empty body ', async () => {
            const propertyId = '63da0cffef0066e0f7c4';
            const res = await request(app).get(`/api/find/${propertyId}`);
            expect(res.statusCode).toBe(500);
            expect(res.body).toStrictEqual({});
        });
      });
    });

    describe('create a property', () => {
      describe('creating a property without a body', () => {
        it('should return an error', async () => {
          const res = await request(app).post('/api/').send({});
          expect(res.statusCode).toBe(500);
        });
      });
      describe('creating a property with a body', () => {
        it('should return  200 Ok status code with a property', async () => {
          const res = await request(app).post('/api/').send({
            "title": "The Home Appartments",
            "country": "Kenya",
            "city": "Kiambu",
            "address": "Kiambu, 2330",
            "price": 12000,
            "category": "For Rent",
            "description": "A property can be described as a piece of real estate or a building and the land it is situated on. It can refer to residential, commercial, or industrial property and can include features such as the number of rooms, size of the land, location, and any special features or amenities. The ownership of a property is legally recognized and can be bought, sold, or leased."
          });
          expect(res.statusCode).toBe(201);
          expect(res.body.title).toStrictEqual('The Home Appartments');
          expect(res.body.country).toStrictEqual('Kenya');
          expect(res.body.price).toBe(12000);
          expect(res.body.category).toStrictEqual('For Rent');
        });
      });
    });

});
