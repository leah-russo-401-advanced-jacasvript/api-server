'use strict';

//this is the express server

const express = require('express');
require('dotenv').config();

const app = express();
//const userRouter = require('')

app.use(express.json());
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log ('express listening on port')
})


module.exports = {
  server: app,
  start: function(port) {
    const PORT = port || process.env.PORT || 3001
    app.listen( PORT, ()=> console.log(`listening on port ${PORT}`))
  }
}