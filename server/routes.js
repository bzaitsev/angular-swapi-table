const url = require('url');

const swapiService = require('./swapiService');

const routes = {};

routes.root = (request, response) => {
  response.send('Test 1');
};

routes.planets = async (request, response) => {
  let query = url.parse(request.url, true).query;
  let results = await swapiService.getPlanets();

  if (query.limit && query.page) {
    results = results.slice(
      (query.page - 1) * query.limit, 
      query.page * query.limit
    );
  }

  response.send({
    count: swapiService.planetsAmount,
    results
  });          
};

module.exports = routes;