'use strict';

module.exports = function (sequelize, dataTypes) {

  var Localization = sequelize.define('Localization', {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    latitude: {
      type: dataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: -90,
        max: 90
      }
    },
    longitude: {
      type: dataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: -180,
        max: 180
      }
    },
    precision: {
      type: dataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'localization',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        Localization.hasOne(models.Report, {
          foreignKey: {
            name: 'localization_fk',
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
      getLatitude: function () {
        return this.latitude;
      },
      getLongitude: function () {
        return this.longitude;
      },
      getPrecision: function () {
        return this.precision;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setLatitude: function (latitude) {
        this.latitude = latitude;
      },
      setLongitute: function (longitude) {
        this.longitude = longitude;
      },
      setPrecision: function (precision) {
        this.precision = precision;
      }
    }
  });

  return Localization;
}