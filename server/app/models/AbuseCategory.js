'use strict';

module.exports = function (sequelize, dataTypes) {

	var AbuseCategory = sequelize.define('AbuseCategory', {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: dataTypes.CHAR(30),
			allowNull: false,
			unique: true,
			validate: {
				max: {
					args: 30,
					msg: 'Max permitted is 30'
				}
			}
		},
		description: {
			type: dataTypes.CHAR(100),
			allowNull: false,
			validate: {
				max: {
					args: 100,
					msg: 'Max permitted is 100'
				}
			}
		}
	}, {
		timestamps: false,
		tableName: 'abuseCategory',
		freezeTableName: true,
		underscored: false,
		classMethods: {
			associate: function (models) {
				AbuseCategory.hasMany(models.Abuse, {
					foreignKey: {
						name: 'abuseCategoryId',
						allowNull: false
					},
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				});
			}
		},
		getterMethods: {
			getId: function () {
				return this.getDataValue('id');
			},
			getName: function () {
				return this.getDataValue('name');
			},
			getDescription: function () {
				return this.getDataValue('description');
			}
		},
		setterMethods: {
			setId: function (id) {
				this.setDataValue('id', this.id);
			},
			setName: function (name) {
				this.setDataValue('name', this.name);
			},
			setDescription: function (description) {
				this.setDataValue('description', this.description);
			}
		}
	});

	return AbuseCategory;
};