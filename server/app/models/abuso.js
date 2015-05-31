'use strict';

module.exports = function (sequelize, dataTypes) {
  
  var Abuso = sequelize.define('Abuso', {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true      
    },
    comentario: {
      type: dataTypes.CHAR(255),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'abuso',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        Abuso.belongsTo(models.Usuario, {
          foreignKey: { name: 'usuario_fk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Abuso.belongsTo(models.CategoriaAbuso, {
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
      getComentario: function () {
        return this.comentario;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setComentario: function (comentario) {
        this.comentario = comentario;
      }
    }
  });
  
  return Abuso;
};