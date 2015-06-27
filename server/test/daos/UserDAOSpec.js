'use strict'

describe('UserDAO:', function () {
	var should = require('chai').should,
		bcrypt = require('bcryptjs'),
		User = require('../../app/models').User,
		UserDAO = require('../../app/daos/UserDAO');

	context('When creating a user', function () {

		it('should be able to create a user if all the data is provided', function (done) {
			var user = User.build({
				name: 'Pablo',
				gender: 'M',
				email: 'a@a.br',
				password: bcrypt.hashSync('123456', 6),
				type: 'A'
			});

			UserDAO.create(user).then(function (result) {
				console.log(result);
				done();
			});
		});

		it('should be able to update a user if all configuration is provided', function (done) {
			var user = User.build({
				id: '1',
				name: 'Pablo',
				gender: 'M',
				email: 'a@a.br',
				password: bcrypt.hashSync('123456', 6),
				type: 'A'
			});

			UserDAO.update(user).then(function (result) {
				console.log(result);
				done();
			});
		});

		it('should be able to get a user with an id', function (done) {
			var id = 1;
			UserDAO.readById(id).then(function (result) {
				console.log(result);
				done();
			});
		});

		//TODO work
		it.skip('should be able to get a user based on a criteria', function (done) {
			var id = 1;
			UserDAO.readByCriteria('criteria').then(function (result) {
				console.log(result);
				done();
			});
		});

		it('should be able to delete a user with an id', function (done) {
			var id = 1;
			UserDAO.delete(id).then(function (result) {
				console.log(result);
				done();
			});
		});
	});

});