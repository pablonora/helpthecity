'use strict';

var sequelize = require('../models').sequelize;

var UsuarioDAO= {
  create: function (user) {
    return sequelize.query('INSERT INTO usuario(ativo, cpf, imagem, email, tipo, senha, sexo, configuracao_fk) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', {
      replacements: [
        user.ativo,
        user.cpf,
        user.imagem,
        user.email,
        user.tipo,
        user.senha,
        user.sexo,
        user.configuracao_id
      ],
      type: sequelize.QueryTypes.INSERT
    }).then(function (user) {
      return user;
    });
  },
  update: function (user) {
    return sequelize.query('UPDATE usuario SET ativo=?, cpf=?, imagem=?, email=?, tipo=?, senha=?, sexo=?, configuracao_fk=? WHERE id = ?', {
      replacements: [
        user.ativo,
        user.cpf,
        user.imagem,
        user.email,
        user.tipo,
        user.senha,
        user.sexo,
        user.configuracao_id,
        user.id
      ],
      type: sequelize.QueryTypes.UPDATE
    }).then(function (user) {
      return user;
    });
  },
  delete: function (id) {
    return sequelize.query('DELETE FROM usuario WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.DELETE
    }).then(function (ok) {
      return ok;
    });
  },
  readById: function (id) {
    return sequelize.query('SELECT * FROM usuario WHERE id = ?', {
      replacements: [id],
      type: sequelize.QueryTypes.SELECT
    }).then(function (user) {
      if(user !== [])
      user.senha = '';
      return user;
    });
  },
  readByCriteria: function (criteria) {
    return sequelize.query('SELECT * FROM usuario', {
      type: sequelize.QueryTypes.SELECT
    }).then(function (users) {
      return users.forEach(function (user) {
        user.senha = ''
      }).then(function () {
        return users;
      });
    });
  },
  login: function (login, pass) {
    return sequelize.query('SELECT * FROM usuario WHERE login = ? AND senha = ?', {
      replacements: [
        login,
        pass
      ],
      type: sequelize.QueryTypes.SELECT
    }).then(function (user) {
      user.senha = '';
      return user;
    });
  }
};

module.exports = UsuarioDAO;