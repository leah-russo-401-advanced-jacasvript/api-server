'use strict';

const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  todoitem: { type: String, required: true },
  difficulty: { type: String, required: true },
  assigned: { type: String, required: true }

})

module.exports = mongoose.model('toDo', toDoSchema);