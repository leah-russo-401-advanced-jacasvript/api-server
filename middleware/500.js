'use strict';

function serverError(request, response, err) {
  response.send(500).json({error: err})
}

module.exports = serverError;