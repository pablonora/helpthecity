'use strict'

describe('ReportDAO:', function () {
	var should = require('chai').should,
		bcrypt = require('bcryptjs'),
		Report = require('../../app/models').Report,
		ReportDAO = require('../../app/daos/ReportDAO');

	context('When creating a report', function () {

		it('should be able to create a report if all the data is provided', function (done) {
			var report = Report.build({
				description: 'Aconteceu aqui!',
				image: [],
				latitude: 90,
				longitude: 180,
				precision: 10
			});

			ReportDAO.create(report).then(function (result) {
				console.log(result);
				done();
			});
		});

		it('should be able to update a report if all configuration is provided', function (done) {
			var report = Report.build({
				id: 1,
				date: Date.now(),
				description: 'Aconteceu aqui!',
				image: [],
				latitude: 90,
				longitude: 180,
				precision: 10
			});

			ReportDAO.update(report).then(function (result) {
				console.log(result);
				done();
			});
		});

		it('should be able to get a report with an id', function (done) {
			var id = 1;
			ReportDAO.readById(id).then(function (result) {
				console.log(result);
				done();
			});
		});

		//TODO work
		it.skip('should be able to get a report based on a criteria', function (done) {
			var id = 1;
			ReportDAO.readByCriteria('criteria').then(function (result) {
				console.log(result);
				done();
			});
		});

		it('should be able to delete a report with an id', function (done) {
			var id = 1;
			ReportDAO.delete(id).then(function (result) {
				console.log(result);
				done();
			});
		});
	});

});