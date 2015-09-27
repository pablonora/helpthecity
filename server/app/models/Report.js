'use strict';

module.exports = function (sequelize, dataTypes) {

	var Report = sequelize.define('Report', {
		id: {
			type: dataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		date: {
			type: dataTypes.DATE,
			allowNull: false
		},
		description: {
			type: dataTypes.CHAR(500),
			allowNull: true,
			validate: {
				max: {
					args: 500,
					msg: 'Max permitted is 500'
				}
			}
		},
		image: {
			type: dataTypes.TEXT,
			allowNull: false
		},
		latitude: {
			type: dataTypes.DECIMAL(9, 6),
			allowNull: false,
			validate: {
				min: -90,
				max: 90
			}
		},
		longitude: {
			type: dataTypes.DECIMAL(9, 6),
			allowNull: false,
			validate: {
				min: -180,
				max: 180
			}
		}
	}, {
		timestamps: false,
		tableName: 'report',
		freezeTableName: true,
		underscored: false,
		classMethods: {
			associate: function (models) {
				Report.belongsTo(models.ReportCategory, {
					foreignKey: {
						name: 'reportCategoryId',
						allowNull: false
					},
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				});
				Report.belongsTo(models.User, {
					foreignKey: {
						name: 'userId',
						allowNull: false
					},
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				});
				Report.belongsToMany(models.User, {
					through: models.Up,
					foreignKey: 'reportId'
				});
			}
		},
		getterMethods: {
			getId: function () {
				return this.getDataValue('id');
			},
			getDate: function () {
				return this.getDataValue('date');
			},
			getDescription: function () {
				return this.getDataValue('description');
			},
			getImage: function () {
				return this.getDataValue('image');
			},
			getLatitude: function () {
				return this.getDataValue('latitude');
			},
			getLongitude: function () {
				return this.getDataValue('longitude');
			}
		},
		setterMethods: {
			setId: function (id) {
				this.setDataValue('id', this.id);
			},
			setDate: function (date) {
				this.setDataValue('date', this.date);
			},
			setDescription: function (description) {
				this.setDataValue('description', this.description);
			},
			setImage: function (image) {
				this.setDataValue('image', this.image);
			},
			setLatitude: function (latitude) {
				this.setDataValue('latitude', this.latitude);
			},
			setLongitude: function (longitude) {
				this.setDataValue('longitude', this.longitude);
			}
		}
	});

	return Report;
};