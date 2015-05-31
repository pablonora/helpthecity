'use strict';

module.exports = function (sequelize, dataTypes) {
  
  var Up = sequelize.define('Up', {
    data: {
      type: dataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'up',
    freezeTableName: true,
    underscored: true,
    getterMethods: {
      getData: function () {
        return this.data;
      }
    },
    setterMethods: {
      setData: function (data) {
        this.data = data;
      }
    }
  });
  
  return Up;
};