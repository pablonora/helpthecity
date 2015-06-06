'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'helpthecity'
    },
    port: 3000,
    db: 'postgres://postgres:postgres@localhost:5432/helpthecity-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'helpthecity'
    },
    port: 3000,
    db: 'postgres://postgres:postgres@localhost:5432/helpthecity-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'helpthecity'
    },
    port: 3000,
    db: 'postgres://postgres:postgres@localhost:5432/helpthecity-production'
  }
};

config[env].url = '/htc/api';

module.exports = config[env];
