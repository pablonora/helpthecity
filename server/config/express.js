'use strict';

var express = require('express'),
	glob = require('glob'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	compress = require('compression'),
	methodOverride = require('method-override'),
	session = require('express-session'),
	fs = require('fs'),
	modelInjector = require('../app/middlewares/modelInjector');

module.exports = function (app, config) {

	var env, controllers, daos;

	env = process.env.NODE_ENV || 'development';
	app.locals.ENV = env;
	app.locals.ENV_DEVELOPMENT = env === 'development';

	// app.use(favicon(config.root + '/public/img/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(cookieParser());
	app.use(compress());
	app.use(express.static(config.root + '/public'));
	app.use(methodOverride());
	app.use(session({
		secret: 'supernova',
		saveUninitialized: true,
		resave: true
	}));

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "http://192.168.0.101:5000");
		res.header("Access-Control-Allow-Credentials", true);
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	//  app.use(function (req, res, next) {
	//    var err = new Error('Not Found');
	//    err.status = 404;
	//    next(err);
	//  });
	//  
	//  if (app.get('env') === 'development') {
	//    app.use(function (err, req, res, next) {
	//      res.status(err.status || 500);
	//      res.send(err);
	//    });
	//  }
	//
	//  app.use(function (err, req, res, next) {
	//    res.status(err.status || 500);
	//      res.end('error');
	//  });
};