'use strict';

var glob = require('glob');

module.exports = function (app, config) {

  // autoloads the files inside the directory
  var routes = glob.sync(config.root + '/app/routes/*.js', {
    ignore: config.root + '/app/routes/index.js'
  });
  routes.forEach(function (route) {
    require(route)(app, config);
  });
};

function getName(path) {
  // find the starting position of the file name, then gets the name without the extension
  var start = path.lastIndexOf('/') + 1,
    name = path.substring(start).split('.')[0];

	name = capitalizeFirstLetter(name);
	
  // removes the word 'route' of the file name
  name = name.split('Route')[0];

  return name;
}

function capitalizeFirstLetter() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}