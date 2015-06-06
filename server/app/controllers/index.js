'use strict';

var glob = require('glob');

module.exports = function (app, config) {
  app.controllers = {};
  
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
  name = path.substring(start).split('.') [0];
  
  // remove the underscores ('_') from the name and capitalize first letter after it. 
  if (name.contains('_')) {
    toUpper = name.lastIndexOf('_') + 1;
    var newName = name.split('_');
    name = newName[0] + newName[1].charAt(0).toUpperCase() + newName[1].slice(1);
  }
  
  return name;
};