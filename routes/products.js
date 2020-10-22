'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.status(200).json(products)
})

router.post('/', (req,res) => {
  req.body.id = 1;
  products.push(req.body);
  res.json(req.body)
})

router.put('/:id', (req,res) => {
  for(let i = 0; i<products.length;i++) {
    if(products[i].id === req.body.id) {
      products[i] = req.body
    }
  }
  res.json(req.body)
})

router.delete('/:id', (req,res) => {
  for(let i = 0; i<products.length;i++) {
    if(products[i].id === req.body.id) {
      products[i] = null;
    }
  }
  res.json(req.body)
})

module.exports = router;