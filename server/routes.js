const https = require('https');
const url = require('url');

const config = require('./config');
const store = require('./store');

const routes = {};

routes.root = (request, response) => {
  response.send('Test 1');
};

routes.planets = async (request, response) => {
  if (!store.planets.length) {
    let next = null;
  
    do {
      let data;

      try {
        data = await getPlanets(next);
      } catch (err) {
        console.error('Error in getPlanets: ', err);
        break;
      }
      
      next = data.next;
      store.planets = store.planets.concat(data.results);
    } while (next);
  }

  let query = url.parse(request.url, true).query;
  let results = store.planets;

  if (query.limit && query.page) {
    results = results.slice(
      (query.page - 1) * query.limit, 
      query.page * query.limit
    );
  }

  response.send({
    count: store.planets.length,
    results
  });          
};

function getPlanets(next) {
  const promise = new Promise((resolve, reject) => {
    https.get(next || config.swapi.planets, response => {
      let data = '';
  
      response.on('data', chunk => {
        data += chunk;
      });
  
      response.on('end', () => {
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

module.exports = routes;