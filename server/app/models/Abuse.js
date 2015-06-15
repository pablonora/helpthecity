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
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'abuse',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        Abuse.belongsTo(models.User, {
          foreignKey: {
            name: 'user_fk',
            allowNull: false
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Abuse.belongsTo(models.AbuseCategory, {
          foreignKey: {
            name: 'abuse_category_fk',
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
      getComment: function () {
        return this.comment;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setComment: function (comment) {
        this.comment = comment;
      }
    }
  });

  return Abuse;
};