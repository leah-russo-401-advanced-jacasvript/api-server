'use strict';

const express = require('express');
const productsCollection = require('../models/products.collection.js');
const categoriesCollection = require('../models/categories.collection.js');

function getRoute(req,res,next) {
  if(req.params.model === 'products') {
    req.params.model = productsCollection;
    next();
  } else if(req.params.model === "categories") {
      req.params.model = categoriesCollection;
      next();
  } else {
    next('path does not exist');
  }
}

module.exports = { getRoute };