'use strict';

module.exports = function (sequelize, dataTypes) {
  
  var CategoriaAbuso = sequelize.define('CategoriaAbuso', {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: dataTypes.CHAR(30),
      allowNull: false
    },
    descricao: {
      type: dataTypes.CHAR(100),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'categoria_abuso',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        CategoriaAbuso.hasMany(models.Abuso, {
          foreignKey: { name: 'categoria_abuso_afk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
      }
    },
    getterMethods: {
      getId: function () {
        return this.id;
      },
      getNome: function () {
        return this.nome;
      },
      getDescricao: function () {
        return this.descricao;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setNome: function (nome) {
        this.nome = nome;
      },
      setDescricao: function (descricao) {
        this.descricao = descricao;
      }
    }
  });
  
  return CategoriaAbuso;
};