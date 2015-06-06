'use strict';

module.exports = function (sequelize, dataTypes) {
  
  var Localizacao = sequelize.define('Localizacao', {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    latitude: {
      type: dataTypes.DECIMAL,
      allowNull: false,
      validate: { min: -90, max: 90 }
    },
    longitude: {
      type: dataTypes.DECIMAL,
      allowNull: false,
      validate: { min: -180, max: 180 }
    },
    precisao: {
      type: dataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'localizacao',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        Localizacao.hasOne(models.Ocorrencia, {
          foreignKey: { name: 'localizacao_fk', allowNull: false },
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
      getPrecisao: function () {
        return this.precisao;
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
      setPrecisao: function (precisao) {
        this.precisao = precisao;
      }
    }
  });
  
  return Localizacao;
}