'use strict';

const dataModel = require('./model.js');
const schema = require('./todo.schema.js');

module.exports = new dataModel(schema);