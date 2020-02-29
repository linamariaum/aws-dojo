const express = require('express');
const getTodos = require('./services/get-todos')

const router = express.Router();

router.get('/todos', getTodos);

/***
 * Front:
 * https://github.com/coolapplications/My-pendings
 * En My-pendings/src/utils/URL.js
  export const url =
  'https://0n9srlf9pc.execute-api.us-east-1.amazonaws.com/prod'
 
 Es la url que me dio amazon, y la que usaremos en el front para las peticiones, 
 El front tiene todo un crud
  */

module.exports = router;