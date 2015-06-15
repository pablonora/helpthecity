'use strict';

module.exports = function (sequelize, DataTypes) {

  var Configuration = sequelize.define('Configuration', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    coverageRadius: {
      field: 'coverage_radius',
      type: DataTypes.FLOAT,
      defaultValue: 10.0,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'configuration',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        Configuration.hasOne(models.User, {
          foreignKey: {
            name: 'configuration_fk',
            allowNull: false
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
      }
    },
    getterMethods: {
      getId: function () {
        return this.id;
      },
      getCoverageRadius: function () {
        return this.coverageRadius;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setCoverageRadius: function (coverageRadius) {
        this.coverageRadius = coverageRadius;
      }
    }
  });

  return Configuration;
};