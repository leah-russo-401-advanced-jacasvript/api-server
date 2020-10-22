'use strict';

const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/productsSchema.js');
const ProductsCollections = require('../models/products.collection.js');
let collection = new ProductsCollections(ProductsModel);

router.get('/', (req,res, next) => {
 try {
   console.log('testing')
   //console.log(collection.read())
   collection.read()
   .then(results => {
     console.log (results);
     res.json(results)
   })
  .catch(err => {
    console.log(err);
  })
 } catch (error) {
   console.log(error);
  next(error);
 }
})

router.post('/', (req,res,next) => {
  console.log(req.body);
  try {
    collection.create(req.body).then(results => {
      res.json(results)
    }).catch(err => next(err))
  } catch (error) {
   next(error);
  }
})

router.put('/:id', (req,res) => {
  try {
    collection.update(req.body,req.params.id).then(results => {
      res.json(results)
    }).catch(err => next(err))
  } catch (error) {
   next(error);
  }
})

router.delete('/:id', (req,res) => {
  try {
    collection.delete(req.params.id).then(results => {
      res.json(results)
    }).catch(err => next(err))
  } catch (error) {
   next(error);
  }
})

module.exports = router;