const express = require('express');
const supertest = require('supertest');

require('../mocks/icecream-service.mock');
const routes = require('../../src/routes');

describe('[Route] /', () => {
  let app;
  let request;

  beforeAll(() => {
    app = express();

    routes(app);
    request = supertest(app);
  });

  it('should return Bem-vinda à API do sorvete', done => {
    request
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        expect(err).toBeNull();
        expect(res.body).toEqual({ name: 'Chocolate', description: 'Dark Chocolate', vegan: false });
        done();
      });
  });
});
