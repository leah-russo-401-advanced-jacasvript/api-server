'use strict';

const dataModel = require('./model.js');
const schema = require('./productsSchema.js');

module.exports = new dataModel(schema);