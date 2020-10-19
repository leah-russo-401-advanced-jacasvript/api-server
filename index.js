'use strict';

//need to get the json-server library
const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middleware = jsonServer.defaults();

const PORT = 3000;

server.use(middleware);
server.use(router);

server.listen( PORT, () => {
  console.log('JSON server is listening')
})