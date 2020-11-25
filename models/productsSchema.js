'use strict';

const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  category: {type: String, required: false},
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true }

})

//need method to authenticate use



module.exports = mongoose.model('Products', productsSchema);
