'use strict';

const express = require('express');
const router = express.Router();

const { getRoute } = require('../middleware/get-model.js');

router.param('model', getRoute)

router.get('/:model', (req,res,next) => {

try {
  req.params.model.read()
  .then(results => {
    res.status(200).json(results)
  }).catch(err => {
    next(err);
  })
} catch (error) {
  next(error);
}
})

router.post('/:model', (req,res,next) => {
  console.log(req.body);
try {
  req.params.model.create(req.body)
  .then(results => {
    console.log(results);
    res.send(results)
  }).catch(err => {
    next(err);
  })
} catch (error) {
  next(error);
}
})

router.put('/:model/:id', (req,res) => {

  try {
    req.params.model.update(req.body,req.params.id)
    .then(results => {
      res.status(200).json(results)
    }).catch(err => {
      next(err);
    })
  } catch (error) {
    next(error);
  }
})

router.delete('/:model/:id', (req,res) => {
try {
  req.params.model.delete(req.params.id)
  .then(results => {
    res.status(200).json(results)
  }).catch(err => {
    next(err);
  })
} catch (error) {
  next(error);
}
})

module.exports = router;

