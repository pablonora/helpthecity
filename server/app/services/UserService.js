'use strict';

var bcrypt = require('bcryptjs');

module.exports = function (app) {

  var UserService = {
    create: function (user) {
      user.password = bcrypt.hashSync(user.password, 6);
      return app.daos.User.create(user).then(function (data) {
        return data;
      });
    },
    update: function (user) {
      return app.daos.User.update(user).then(function (data) {
        return data;
      });
    },
    delete: function (id) {
      return app.daos.User.delete(id).then(function (ok) {
        return ok;
      });
    },
    readById: function (id) {
      return app.daos.User.readById(id).then(function (data) {
        return data;
      });
    },
    readByCriteria: function (criteria) {
      return app.daos.User.readByCriteria(criteria).then(function (data) {
        return data;
      });
    },
    readByEmail: function (email) {
      return app.daos.User.readByEmail(email).then(function (data) {
        return data;
      });
    }
  };

  return UserService;
};