'use strict';

var express = require('express'),
  router = express.Router(),
  marko = require('marko'),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

var indexTemplate = marko.load(require.resolve('../views/index.marko'));
router.get('/', function (req, res, next) {
  db.Article.findAll().then(function (articles) {
    indexTemplate.render({
      $global: {locals: req.app.locals},
      title: 'Generator-Express MVC',
      articles: articles
    }, res);
  });
});
