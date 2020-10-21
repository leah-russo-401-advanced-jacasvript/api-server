'use strict';

//this is the express server

const express = require('express');
require('dotenv').config();

const app = express();
//const userRouter = require('')

const logger = require('../middleware/logger.js');
const timeStamp = require('../middleware/timestamp.js');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');

app.use(express.json());
const categories = [];
const products = [];
app.use(timeStamp);
app.use(logger);

app.get('/categories', (req,res) => {
  res.status(200).json(categories)
})

app.get('/products', (req,res) => {
  res.status(200).json(products)
})

app.post('/categories', (req,res) => {
  req.body.id = 1;
  categories.push(req.body);
  res.json(req.body)
})

app.post('/products', (req,res) => {
  req.body.id = 1;
  products.push(req.body);
  res.json(req.body)
})

app.put('/categories/:id', (req,res) => {
  for(let i = 0; i<categories.length;i++) {
    if(categories[i].id === req.body.id) {
      categories[i] = req.body
    }
  }
  res.json(req.body)
})

app.put('/products/:id', (req,res) => {
  for(let i = 0; i<products.length;i++) {
    if(products[i].id === req.body.id) {
      products[i] = req.body
    }
  }
  res.json(req.body)
})

app.delete('/categories/:id', (req,res) => {
  for(let i = 0; i<categories.length;i++) {
    if(categories[i].id === req.body.id) {
      categories[i] = null;
    }
  }
  res.json(req.body)
})

app.delete('/products/:id', (req,res) => {
  for(let i = 0; i<products.length;i++) {
    if(products[i].id === req.body.id) {
      products[i] = null;
    }
  }
  res.json(req.body)
})


app.use('*',notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: function(port) {
    const PORT = port || process.env.PORT || 3001
    app.listen( PORT, ()=> console.log(`listening on port ${PORT}`))
  }
}