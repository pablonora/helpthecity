'use strict';

var glob = require('glob');

module.exports = function (app, config) {
  app.controllers = {};

  // autoloads the files inside the directory
  var controllers = glob.sync(config.root + '/app/controllers/*.js', {
    ignore: config.root + '/app/controllers/index.js'
  });
  controllers.forEach(function (controller) {
    app.controllers[getName(controller)] = require(controller)(app);
  });
};

function getName(path) {
  // find the starting position of the file name, then gets the name without the extension
  var start = path.lastIndexOf('/') + 1,
    name = path.substring(start).split('.')[0];

  // removes the word 'controller' of the file name
  name = name.split('Controller')[0];

  return name;
};