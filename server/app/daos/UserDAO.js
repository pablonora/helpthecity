'use strict';

var sequelize = require('../models').sequelize;

var UserDAO = {
  create: function (user) {
    return sequelize.query('INSERT INTO "user"(active, cpf, image, email, type, password, sex, configuration_fk) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', {
      replacements: [
        user.active,
        user.cpf,
        user.image,
        user.email,
        user.type,
        user.password,
        user.sex,
        user.configuration_id
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (user) {
      return user;
    });
  },
  update: function (user) {
    return sequelize.query('UPDATE "user" SET active=?, cpf=?, image=?, email=?, type=?, password=?, sex=?, configuration_fk=? WHERE id = ?', {
      replacements: [
        user.active,
        user.cpf,
        user.image,
        user.email,
        user.type,
        user.password,
        user.sex,
        user.configuration_id,
        user.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (user) {
      return user;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM "user" WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM "user" WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (user) {
      return user;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM "user"', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (users) {
      return users;
    });
  },
  readByEmail: function (email) {
    return sequelize.query('SELECT * FROM "user" WHERE email = ?', {
      replacements: [email],
      type: sequelize.QueryTypes.SELECT
    }).then(function (users) {
      return users[0];
    });
  }
};

module.exports = UserDAO;