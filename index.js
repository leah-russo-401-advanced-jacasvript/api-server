'use strict';

//this is the json-server 

//need to get the json-server library
require('dotenv').config();

// const jsonServer = require('json-server');

// const server = jsonServer.create();

// const router = jsonServer.router('db.json');

// const middleware = jsonServer.defaults();

 const PORT = process.env.PORT || 3001;

const server = require('./lib/server.js');
// server.use(middleware);
// server.use(router);

// server.listen( PORT, () => {
//  console.log(`JSON server is listening on PORT ${PORT}` )
//})

/////////////////////////////////////////////////////////////////////////////
//express server:
/////////////////////////////////////////////////////////////////////////////

const app = require('./lib/server.js');

server.start();
