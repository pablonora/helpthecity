'use strict';

module.exports = function (sequelize, dataTypes) {
  
  var CategoriaOcorrencia = sequelize.define('CategoriaOcorrencia', {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: dataTypes.CHAR(13),
      allowNull: false
    },
    descricao: {
      type: dataTypes.CHAR(100),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'categoria_ocorrencia',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        CategoriaOcorrencia.hasMany(models.Ocorrencia, {
          foreignKey: { name: 'categoria_ocorrencia_fk', allowNull: false },
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
  
  return CategoriaOcorrencia;
};