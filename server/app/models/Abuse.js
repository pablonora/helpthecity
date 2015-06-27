'use strict';

module.exports = function (sequelize, dataTypes) {

	var Abuse = sequelize.define('Abuse', {
		id: {
			type: dataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		comment: {
			type: dataTypes.CHAR(255),
			allowNull: false,
			validate: {
				max: {
					args: 255,
					msg: 'Max permitted is 255'
				}
			}
		}
	}, {
		timestamps: false,
		tableName: 'abuse',
		freezeTableName: true,
		underscored: false,
		classMethods: {
			associate: function (models) {
				Abuse.belongsTo(models.User, {
					foreignKey: {
						name: 'userId',
						allowNull: false
					},
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				});
				Abuse.belongsTo(models.AbuseCategory, {
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
			getComment: function () {
				return this.getDataValue('comment');
			}
		},
		setterMethods: {
			setId: function (id) {
				this.setDataValue('id', this.id);
			},
			setComment: function (comment) {
				this.setDataValue('comment', this.comment);
			}
		}
	});

	return Abuse;
};