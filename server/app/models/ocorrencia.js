'use strict';

module.exports = function (sequelize, dataTypes) {
  
  var Ocorrencia = sequelize.define('Ocorrencia', {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true
    },
    data: {
      type: dataTypes.DATE,
      allowNull: false
    },
    descricao: {
      type: dataTypes.CHAR(500),
      allowNull: false
    },
    imagem: {
      type: dataTypes.BLOB,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'ocorrencia',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        Ocorrencia.belongsTo(models.CategoriaOcorrencia, {
          foreignKey: { name: 'categoria_ocorrencia_fk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Ocorrencia.belongsTo(models.Localizacao, {
          foreignKey: { name: 'localizacao_fk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Ocorrencia.belongsTo(models.Usuario, {
          foreignKey: { name: 'usuario_fk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Ocorrencia.hasMany(models.Usuario, { through: models.Up, foreignKey: 'ocorrencia_fk' });
      }
    },
    getterMethods: {
      getId: function () {
        return this.id;
      },
      getData: function () {
        return this.data;
      },
      getDescricao: function () {
        return this.descricao;
      },
      getImagem: function () {
        return this.imagem;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setData: function (data) {
        this.data = data;
      },
      setDescricao: function (descricao) {
        this.descricao = descricao;
      },
      setImagem: function (imagem) {
        this.imagem = imagem
      }
    }
  });
  
  return Ocorrencia;
};