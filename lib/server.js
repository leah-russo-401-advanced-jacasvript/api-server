'use strict';

//this is the express server

const express = require('express');
require('dotenv').config();

const app = express();

const logger = require('../middleware/logger.js');
const timeStamp = require('../middleware/timestamp.js');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');
const categoriesRouter = require('../routes/categories.js');
const productsRouter = require('../routes/products.js');

app.use(express.json());
const categories = [];
const products = [];
app.use(timeStamp);
app.use(logger);
app.use('/categories', categoriesRouter);
app.use('./products', productsRouter);
app.use( (err, req, res, next) => {
  res.status(400).send('try again');
})


app.get('/products', (req,res) => {
  res.status(200).json(products)
})


app.post('/products', (req,res) => {
  req.body.id = 1;
  products.push(req.body);
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