const https = require('https'),
      url = require('url');

const config = require('./config');

module.exports = {
  'test-page': {
    path: '/',
    action: (request, response, next) => {
      response.send('Test 1');
    } 
  },
  'get-planets': {
    path: '/api/planets/',
    action: async (request, response, next) => {
      if (!global.planets.length) {
        let next = null;
      
        do {
          let data = await getPlanets(next);
          next = data.next;
          global.planets = global.planets.concat(data.results);
        } while (next);
      }
    
      let query = url.parse(request.url, true).query,
          results = global.planets;

      if (query.limit && query.page) {
        results = results.slice(
          (query.page - 1) * query.limit, 
          query.page * query.limit
        );
      }

      response.send({
        count: global.planets.length,
        results
      });          
    }
  }
};

function getPlanets(next) {
  const promise = new Promise((resolve, reject) => {
    https.get(next || 'https://swapi.co/api/planets/', swapiResponse => {
      let data = '';
  
      swapiResponse.on('data', chunk => {
        data += chunk;
      });
  
      swapiResponse.on('end', () => {
        if (!data) {
          return reject();
        }
        
        data = JSON.parse(data);
        resolve(data);
      });
    })
    .on('error', error => {
      reject(error);
    }); 
  });

  return promise;
}