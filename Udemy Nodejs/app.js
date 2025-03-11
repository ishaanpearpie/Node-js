const http = require('http');

const routes = require('./routes');   //Importing the routes.js file

console.log(routes.someText);

const server = http.createServer(routes.handler); 

server.listen(3000);