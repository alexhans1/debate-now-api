const express = require('express');
const router = express.Router();

let request = require('request-promise');

module.exports = function () {

  router.get('/pexels/:page/:perPage/:search?', async function(req, res) {
    try {
      let authenticateClientOptions = {
        method: 'GET',
        url: 'http://api.pexels.com/v1/' +
              (!req.params.search ? 'popular?' : 'search?query=' + req.params.search + '&') +
              'per_page=' + req.params.perPage + '&' +
              'page=' + (req.params.page),
        headers: {
          'Authorization': process.env.PEXELS_API_KEY
        },
        json: true,
      };

      await request(authenticateClientOptions)
      .then(function (parsedBody) {
        res.send(parsedBody)
      })
      .catch(function (e) {
        console.error(e);
      });
    } catch (ex) {
      console.error(ex);
      next('Error while fetching all events.');
    }
  });

  return router;
};
