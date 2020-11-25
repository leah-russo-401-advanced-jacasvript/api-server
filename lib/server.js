'use strict';

//this is the express server

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const logger = require('../middleware/logger.js');
const timeStamp = require('../middleware/timestamp.js');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');
// const categoriesRouter = require('../routes/categories.js');
// const productsRouter = require('../routes/products.js');
app.use(cors())
const modelRouter = require('../routes/v1.js');
app.use(express.json());
//const categories = [];
//const products = [];
app.use(timeStamp);
app.use(logger);
//app.use('/categories', categoriesRouter);
// app.use('/products', (req,res,next) => {
//   res.send('testing from products')
// })
//app.use('/products', productsRouter);
app.use('/api/v1', modelRouter);


app.use('*',notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: function(port) {
    const PORT = port || process.env.PORT || 3001
    app.listen( PORT, ()=> console.log(`listening on port ${PORT}`))
  }
}