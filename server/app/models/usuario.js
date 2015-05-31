'use strict';

module.exports = function (sequelize, DataTypes) {

  var Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    ativo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    cpf: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      unique: true
    },
    imagem: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    email: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      unique: true
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    senha: {
      type: DataTypes.CHAR(25),
      allowNull: false
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'usuario',
    freezeTableName: true,
    underscored: true,
    classMethods: {
      associate: function (models) {
        Usuario.belongsTo(models.Configuracao, {
          foreignKey: { name: 'configuracao_fk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Usuario.hasMany(models.Abuso, {
          foreignKey: { name: 'usuario_fk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Usuario.hasMany(models.Ocorrencia, {
          foreignKey: { name: 'usuario_fk', allowNull: false },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Usuario.hasMany(models.Ocorrencia, { through: models.Up, foreignKey: 'usuario_fk' });
      }
    },
    getterMethods: {
      getId: function () {
        return this.id;
      },
      getAtivo: function () {
        return this.ativo;
      },
      getCpf: function () {
        return this.cpf;
      },
      getImagem: function () {
        return this.imagem;
      },
      getEmail: function () {
        return this.email;
      },
      getTipo: function () {
        return this.tipo;
      },
      getSenha: function () {
        return this.senha;
      },
      getSexo: function () {
        return this.senha;
      }
    },
    setterMethods: {
      setId: function (id) {
        this.id = id;
      },
      setAtivo: function (ativo) {
        this.ativo = ativo;
      },
      setCpf: function (cpf) {
        this.cpf = cpf;
      },
      setImagem: function (imagem) {
        this.imagem = imagem;
      },
      setEmail: function (email) {
        this.email = email;
      },
      setTipo: function (tipo) {
        this.tipo = tipo;
      },
      setSenha: function (senha) {
        this.senha = senha;
      },
      setSexo: function (sexo) {
        this.sexo = sexo;
      }
    }
  });

  return Usuario;
};