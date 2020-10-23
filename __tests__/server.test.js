'use strict';

const dotenv = require('dotenv');
const express = require('express');
const app = express();
const Productschema = require('../models/productsSchema.js');
const MongoInterface = require('../models/products.collection');

const ProductInterface = new MongoInterface(ProductsCollection);

const supergoose = require('@code-fellows/supergoose');
const { response } = require('express');
const ProductsCollection = require('../models/products.collection');

const testserver = supergoose(server.app);

describe('testing the app', ()=> {

  beforeAll(async ()=> {
    //create one product
    //
    //import the controller and add a product via the controller, not the router?
  })

  it('should return some products', () => {
    return testserver.get('/products')
    .then(response => {
      expect(response.body).toBe([]);
    })
  })
})

//install jest, supergoose, dotenv

