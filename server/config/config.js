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
    db: 'postgres://postgres:1z7s5q3a90@localhost:5432/helpthecity-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'helpthecity'
    },
    port: 3000,
    db: 'postgres://localhost:5432/helpthecity-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'helpthecity'
    },
    port: 3000,
    db: 'postgres://localhost:5432/helpthecity-production'
  }
};

module.exports = config[env];
