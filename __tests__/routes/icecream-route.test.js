const express = require('express');
const supertest = require('supertest');

require('../mocks/icecream-service.mock');
const routes = require('../../src/routes');
const middleware = require('../../src/middlewares');

describe('[Route] /', () => {
  let app;
  let request;

  beforeAll(() => {
    app = express();
    middleware(app);
    routes(app);
    request = supertest(app);
  });

  it('should return Bem-vinda à API do sorvete', done => {
    request
      .get('/icecream')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        expect(err).toBeNull();
        expect(res.body).toEqual({ name: 'Chocolate', description: 'Dark Chocolate', vegan: false });
        done();
      });
  });

  it('should filter vegan icecreams', done => {
    request
      .get('/icecream/vegan')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        expect(err).toBeNull();
        expect(res.body).toEqual({ name: 'Coco', vegan: true });
        done();
      });
  });

  it('should remove icecream by id', done => {
    request
      .del('/icecream/someId')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        expect(err).toBeNull();
        expect(res.body).toEqual({ message: 'Icecream removed!' });
        done();
      });
  });

  it('should create an icecream', done => {
    request
      .post('/icecream/')
      .send({ name: 'Chocolate', description: 'Dark Chocolate', vegan: false })
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        expect(res.body).toEqual({ name: 'Chocolate', description: 'Dark Chocolate', vegan: false });
        expect(err).toBeNull();
        done();
      });
  });
});
