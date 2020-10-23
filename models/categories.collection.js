'use strict';

const dataModel = require('./model.js');
const schema = require('./categoriesSchema.js');

module.exports = new dataModel(schema);