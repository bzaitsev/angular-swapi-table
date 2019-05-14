const https = require('https');

const config = require('./config');

module.exports = {
  _planets: [],

  getPlanets() {
    const promise = new Promise(async (resolve, reject) => {
      if (!this._planets.length) {
        let next = null;
      
        do {
          let data;
    
          try {
            data = await this.downloadPlanets(next);
          } catch (error) {
            reject(error);
            break;
          }
          
          next = data.next;
          this._planets = this._planets.concat(data.results);
        } while (next);
      }
  
      return resolve(this._planets);
    });

    return promise;
  },

  get planetsAmount() {
    return this._planets.length;
  },

  downloadPlanets(next) {
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
};