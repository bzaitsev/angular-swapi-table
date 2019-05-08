const http = require('http');
const express = require('express'); 
const app = express();

const config = require('./config');
const routes = require('./routes');

app.get('/', routes.root);
app.get('/api/planets/', routes.planets);

http
  .createServer(app)
  .listen(config.port, error => { 
    if (error) {
      return console.error('Error: ', error);   
    }
    console.log(`Server is listening on port ${config.port}`); 
  });