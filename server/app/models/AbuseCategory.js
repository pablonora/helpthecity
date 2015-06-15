'use strict';

module.exports = function (sequelize, dataTypes) {

  var AbuseCategory = sequelize.define('AbuseCategory', {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.CHAR(30),
      allowNull: false
    },
    description: {
      type: dataTypes.CHAR(100),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'abuse_category',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        AbuseCategory.hasMany(models.Abuse, {
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
      getName: function () {
        return this.name;
      },
      getDescription: function () {
        return this.description;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setName: function (name) {
        this.name = name;
      },
      setDescription: function (description) {
        this.description = description;
      }
    }
  });

  return AbuseCategory;
};