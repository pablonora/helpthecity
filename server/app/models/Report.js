'use strict';

module.exports = function (sequelize, dataTypes) {

  var Report = sequelize.define('Report', {
    id: {
      type: dataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: dataTypes.DATE,
      allowNull: false
    },
    description: {
      type: dataTypes.CHAR(500),
      allowNull: false
    },
    image: {
      type: dataTypes.BLOB,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'report',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        Report.belongsTo(models.ReportCategory, {
          foreignKey: {
            name: 'report_category_fk',
            allowNull: false
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Report.belongsTo(models.Localization, {
          foreignKey: {
            name: 'localization_fk',
            allowNull: false
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Report.belongsTo(models.User, {
          foreignKey: {
            name: 'user_fk',
            allowNull: false
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Report.belongsToMany(models.User, {
          through: models.Up,
          foreignKey: 'report_fk'
        });
      }
    },
    getterMethods: {
      getId: function () {
        return this.id;
      },
      getDate: function () {
        return this.date;
      },
      getDescription: function () {
        return this.description;
      },
      getImage: function () {
        return this.image;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setDate: function (date) {
        this.date = date;
      },
      setDescription: function (description) {
        this.description = description;
      },
      setImage: function (image) {
        this.image = image;
      }
    }
  });

  return Report;
};