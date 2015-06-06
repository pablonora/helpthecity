'use strict';

var glob = require('glob');

module.exports = function (app, config) {
  app.daos = {};
  
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
  // find the starting position of the file name, then gets the name without the extension and underscores
  var start = path.lastIndexOf('/')+1,
      name = path.substring(start).split('.')[0];
  if(name.contains('_')) {
    toUpper = name.lastIndexOf('_')+1;
    newName = name.split('_');
    name = newName[0] + newName[1].charAt(0).toUpperCase() + newName[1].slice(1);
  }
  return name;
};