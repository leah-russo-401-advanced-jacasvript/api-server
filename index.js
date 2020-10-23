'use strict';

const server = require('./lib/server.js');

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI);

server.start();
