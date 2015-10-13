'use strict';

module.exports = function (sequelize, dataTypes) {

	var ReportCategory = sequelize.define('ReportCategory', {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: dataTypes.CHAR(13),
			allowNull: false,
			unique: true,
			validate: {
				max: {
					args: 13,
					msg: 'Max permitted is 13'
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
		tableName: 'reportCategory',
		freezeTableName: true,
		underscored: false,
		classMethods: {
			associate: function (models) {
				ReportCategory.hasMany(models.Report, {
					foreignKey: {
						name: 'reportCategoryId',
						allowNull: false
					},
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				});
			}
		}
	});

	return ReportCategory;
};