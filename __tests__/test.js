'use strict';

const supertest = require('supertest');
const {server} = require('../lib/server.js');
const testServer = supertest(server);

describe('testing stuff', () => {
  it('should test stuff', () => {
    return testServer.get('/categories')
    .then(results => {
      expect(results.status).toBe(200);
    })
  })

  it('should test another thing', () => {
    const categories = {name: 'test', id: 1}
    return testServer.post('/categories')
    .send(categories)
    .then(results => {
      expect(results.status).toBe(200);
      expect(results.body.name).toEqual('test')
    })
  })

  it('should test another thing', () => {
    const categories = {name: 'update', id: 1}
    return testServer.put('/categories/1')
    .send(categories)
    .then(results => {
      expect(results.status).toBe(200);
      expect(results.body.name).toEqual('update')
    })
  })

  it('should test another thing', () => {
    return testServer.delete('/categories/1')
    .then(results => {
      expect(results.status).toBe(200);
      expect(results.body).toEqual({})
    })
  })

  //products 

  it('should test stuff', () => {
    return testServer.get('/products')
    .then(results => {
      expect(results.status).toBe(200);
    })
  })

  it('should test another thing', () => {
    const products = {name: 'test', id: 1}
    return testServer.post('/products')
    .send(products)
    .then(results => {
      expect(results.status).toBe(200);
      expect(results.body.name).toEqual('test')
    })
  })

  it('should test another thing', () => {
    const products = {name: 'update', id: 1}
    return testServer.put('/products/1')
    .send(products)
    .then(results => {
      expect(results.status).toBe(200);
      expect(results.body.name).toEqual('update')
    })
  })

  it('should test another thing', () => {
    return testServer.delete('/products/1')
    .then(results => {
      expect(results.status).toBe(200);
      expect(results.body).toEqual({})
    })
  })
})