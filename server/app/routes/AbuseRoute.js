'use strict';

module.exports = function (app, config) {
	var Abuse = app.controllers.Abuse,
		auth = require('../middlewares/auth');

	app.post(config.url + '/abuse', Abuse.create);
	app.put(config.url + '/abuse/:id', auth, Abuse.update);
	app.delete(config.url + '/abuse/:id', auth, Abuse.delete);
	app.get(config.url + '/abuse/:id', auth, Abuse.readById);
	app.get(config.url + '/abuse', auth, Abuse.readByCriteria);
};