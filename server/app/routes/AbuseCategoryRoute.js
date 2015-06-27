'use strict';

module.exports = function (app, config) {
	var AbuseCategory = app.controllers.AbuseCategory,
		auth = require('../middlewares/auth');

	//TODO remove auth comments
	app.post(config.url + '/abuseCategory', /*auth,*/ AbuseCategory.create);
	app.put(config.url + '/abuseCategory/:id', /*auth,*/ AbuseCategory.update);
	app.delete(config.url + '/abuseCategory/:id', /*auth,*/ AbuseCategory.delete);
	app.get(config.url + '/abuseCategory/:id', /*auth,*/ AbuseCategory.readById);
	app.get(config.url + '/abuseCategory', /*auth,*/ AbuseCategory.readByCriteria);
};