'use strict';

module.exports = function (sequelize, dataTypes) {

	var Up = sequelize.define('Up', {
		date: {
			type: dataTypes.DATE,
			allowNull: false
		}
	}, {
		timestamps: false,
		tableName: 'up',
		freezeTableName: true,
		underscored: false
	});

	return Up;
};