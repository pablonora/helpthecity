'use strict';

module.exports = function (app, config) {
	var User = app.controllers.User,
		auth = require('../middlewares/auth');

	app.post(config.url + '/user', User.create);
	app.put(config.url + '/user/:id', auth, User.update);
	app.delete(config.url + '/user/:id', auth, User.delete);
	app.get(config.url + '/user/:id', auth, User.readById);
	app.get(config.url + '/user', auth, User.readByCriteria);
};