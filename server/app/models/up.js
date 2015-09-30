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
		underscored: false,
		getterMethods: {
			getDate: function () {
				return this.getDataValue('date');
			}
		},
		setterMethods: {
			setDate: function (date) {
				this.setDataValue('date', date);
			}
		}
	});

	return Up;
};