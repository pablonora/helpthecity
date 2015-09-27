'use strict';

var glob = require('glob');

module.exports = function (app, config) {
  app.daos = {};

  // autoloads the files inside the directory
  var daos = glob.sync(config.root + '/app/daos/*.js', {
    ignore: [
      config.root + '/app/daos/index.js'
    ]
  });
  daos.forEach(function (dao) {
    app.daos[getName(dao)] = require(dao);
  });
};

function getName(path) {
  // find the starting position of the file name, then gets the name without the extension
  var start = path.lastIndexOf('/') + 1,
    name = path.substring(start).split('.')[0];

	name = capitalizeFirstLetter(name);
	
  // removes the word 'dao' of the file name
  name = name.split('DAO')[0];

  return name;
}

function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}