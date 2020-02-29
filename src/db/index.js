// npm i aws-serverless-express cors express mysql2
//Crearemos el pull de conexiones para conectarse a la base de datos

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '54.86.29.87',
    user: 'user_dojo',
    password: 'awsdojo',
    database: 'dojo_aws_lambdas'
});

module.exports = pool;