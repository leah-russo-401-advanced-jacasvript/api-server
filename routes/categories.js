'use strict';

const express = require('express');
const router = express.Router();
const categories = [];

router.get('/', (req,res) => {
  res.status(200).json(categories)
})

router.post('/', (req,res) => {
  req.body.id = 1;
  categories.push(req.body);
  res.json(req.body)
})

router.put('/:id', (req,res) => {
  for(let i = 0; i<categories.length;i++) {
    if(categories[i].id === req.body.id) {
      categories[i] = req.body
    }
  }
  res.json(req.body)
})

router.delete('/:id', (req,res) => {
  for(let i = 0; i<categories.length;i++) {
    if(categories[i].id === req.body.id) {
      categories[i] = null;
    }
  }
  res.json(req.body)
})

module.exports = router;

