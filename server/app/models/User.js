'use strict';

module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    active: {
      type: DataTypes.CHAR(1),
      defaultValue: 'S',
      allowNull: false
    },
    cpf: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    email: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      unique: true
    },
    type: {
      type: DataTypes.CHAR(1),
      defaultValue: 'U',
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false
    },
    sex: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'user',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        User.belongsTo(models.Configuration, {
          foreignKey: {
            name: 'configuration_fk',
            allowNull: false
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        User.hasMany(models.Abuse, {
          foreignKey: {
            name: 'user_fk',
            allowNull: false
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        User.hasMany(models.Report, {
          foreignKey: {
            name: 'user_fk',
            allowNull: false
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        User.belongsToMany(models.Report, {
          through: models.Up,
          foreignKey: 'user_fk'
        });
      }
    },
    getterMethods: {
      getId: function () {
        return this.id;
      },
      getActive: function () {
        return this.active;
      },
      getCpf: function () {
        return this.cpf;
      },
      getImage: function () {
        return this.image;
      },
      getEmail: function () {
        return this.email;
      },
      getType: function () {
        return this.type;
      },
      getPassword: function () {
        return this.password;
      },
      getSex: function () {
        return this.sex;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setActive: function (active) {
        this.active = active;
      },
      setCpf: function (cpf) {
        this.cpf = cpf;
      },
      setImage: function (image) {
        this.image = image;
      },
      setEmail: function (email) {
        this.email = email;
      },
      setType: function (type) {
        this.type = type;
      },
      setPassword: function (password) {
        this.password = password;
      },
      setSex: function (sex) {
        this.sex = sex;
      }
    }
  });

  return User;
};