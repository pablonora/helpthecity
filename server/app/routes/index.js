'use strict';

var glob = require('glob');

module.exports = function (app, config) {
  
  var routes = glob.sync(config.root + '/app/routes/*.js', {
    ignore: config.root + '/app/routes/index.js'
  });
  routes.forEach(function (route) {
    require(route)(app, config);
  });
};