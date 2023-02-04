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

describe('The Blogs', () => {
  describe('Create new blog', () => {
    describe('send data to the api/blogs/new', () => {
    it('should return 200 ok for a valid body', async () => {
        const res = await request(app).post('/api/blogs/new').send({
            "title": "How to make nice soup",
            "description": "Get to my new school and I will show you how to make new nice soup",
            "category": "Sports",
            "author": "dukelester"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toStrictEqual('How to make nice soup');
        expect(res.body.category).toStrictEqual('Sports');
        expect(res.body.author).toStrictEqual('dukelester');
    });
   });
  });
  describe('Create new blog', () => {
    describe('send wrong data to the api/blogs/new', () => {
    it('should return an error for invalid body', async () => {
        const res = await request(app).post('/api/blogs/new').send({})
        expect(res.statusCode).toBe(500);
    });
   });
  });
  describe('get blog details', () => {
    describe('get the details of a blog api/blogs/find/:blogId', () => {
    it('should return 200 ok for a valid blgogId with data', async () => {
        const blogId = '63de1b7e24827311304e3dad';
        const res = await request(app).get(`/api/blogs/find/${blogId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body._id).toStrictEqual('63de1b7e24827311304e3dad');
        expect(res.body.category).toStrictEqual('Sports');
        expect(res.body.author).toStrictEqual('dukelester');
    });
   });
  });
  describe('get blog details', () => {
    describe('get the details of a blog api/blogs/find/:blogId', () => {
    it('should return an error for an invalid ID for the blog', async () => {
        const blogId = '63de1b7e2482731134e3dad';
        const res = await request(app).get(`/api/blogs/find/${blogId}`);
        expect(res.statusCode).toBe(500);
    });
   });
  });
  describe('update blog details', () => {
    describe('Update the details of a blog api/blogs/update/:blogId', () => {
    it('should return the updated blog ', async () => {
        const blogId = '63de1b7e24827311304e3dad';
        const res = await request(app).put(`/api/blogs/update/${blogId}`).send({
          "title": "My very great blog post",
          "category": "Food",
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toStrictEqual('My very great blog post');
        expect(res.body.category).toStrictEqual('Food');
    });
   });
  });
  describe('update blog details', () => {
    describe('Update the details of a blog api/blogs/update/:blogId', () => {
    it('should return an error for an invalid ID for the blog', async () => {
        const blogId = '63de1b7e248311394e3dad';
        const res = await request(app).put(`/api/blogs/update/${blogId}`).send({
          "title": "My very great blog post",
          "category": "Food",
        });
        expect(res.statusCode).toBe(500);
    });
   });
  });
  describe('Delete a blog', () => {
    describe('delete the blog api/blogs/delete/:blogId', () => {
    it('should return a success message for a deleted blog', async () => {
        const blogId = '63de1b7e24827311304e3dad';
        const res = await request(app).delete(`/api/blogs/delete/${blogId}`)
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toStrictEqual(`The blog with the Id ${blogId} was deleted successfully!`)
    });
   });
  });
  describe('Delete a blog', () => {
    describe('delete the blog api/blogs/delete/:blogId', () => {
    it('should return an error message for a deleted blog with an invalid Id', async () => {
        const blogId = '63de1b7e24827304e3dad';
        const res = await request(app).delete(`/api/blogs/delete/${blogId}`)
        expect(res.statusCode).toBe(500);
    });
   });
  });
});
