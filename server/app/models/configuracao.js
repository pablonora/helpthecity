'use strict';

module.exports = function (sequelize, DataTypes) {

  var Configuracao = sequelize.define('Configuracao', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    raioAbrangencia: {
      field: 'raio_abrangencia',
      type: DataTypes.FLOAT,
      defaultValue: 10.0,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'configuracao',
    freezeTableName: true,
    underscored: true, 
    classMethods: {
      associate: function (models) {
        Configuracao.hasOne(models.Usuario, {
          foreignKey: { name: 'configuracao_fk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
      }
    },
    getterMethods: {
      getId: function () {
        return this.id;
      },
      getRaioAbrangencia: function () {
        return this.raioAbrangencia;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setRaioAbrangencia: function (raioAbrangencia) {
        this.raioAbrangencia = raioAbrangencia;
      }
    }
  });

  return Configuracao;
};