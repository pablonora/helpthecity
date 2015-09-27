'use strict';

var glob = require('glob');

module.exports = function (app, config) {
  app.services = {};

  // autoloads the files inside the directory
  var services = glob.sync(config.root + '/app/services/*.js', {
    ignore: [
      config.root + '/app/services/common.js',
      config.root + '/app/services/index.js'
    ]
  });
  services.forEach(function (service) {
    app.services[getName(service)] = require(service)(app);
  });
};

function getName(path) {
  // find the starting position of the file name, then gets the name without the extension
  var start = path.lastIndexOf('/') + 1,
    name = path.substring(start).split('.')[0];

	name = capitalizeFirstLetter(name);
	
  // removes the word 'route' of the file name
  name = name.split('Service')[0];

  return name;
}

function capitalizeFirstLetter() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}