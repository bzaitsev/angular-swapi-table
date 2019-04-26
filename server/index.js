const http = require('http'),
      express = require('express'), 
      app = express();

const config = require('./config'),
      routes = require('./routes');

global.planets = [];

app
  .use(express.static(config.staticPath))
  .get(routes['test-page']['path'], routes['test-page']['action'])
  .get(routes['get-planets']['path'], routes['get-planets']['action']);

http
  .createServer(app)
  .listen(config.port, error => { 
    if (error) {
      return console.error('Server start error: ', error);   
    }
    console.log(`Server is listening on port ${config.port}`); 
  });