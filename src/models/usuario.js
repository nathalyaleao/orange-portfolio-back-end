
const bcrypt = require('bcrypt')

'use strict';
const {

  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        isAllowNull: (value, next) => {
          if (value === "") next(new Error('o campo nome é obrigatório'));
          next();
        },
        len: {
          args: [3, 30],
          msg: 'o campo nome deve ter no mínimo 3 caracteres'
        },
      }
    },
    sobrenome: {
      type: DataTypes.STRING,
      validate: {
        isAllowNull: (value, next) => {
          if (value === "") next(new Error('o campo sobrenome é obrigatório'));
          next();
        },
        len: {
          args: [3, 30],
          msg: 'o campo nome deve ter no mínimo 3 caracteres'
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isAllowNull: (value, next) => {
          if (value === "") next(new Error('o campo email é obrigatório'));
          next();
        },
        isUnique: (value, next) => {
          Usuario.findAll({
            where: { email: value },
            attributes: ['id'],
          })
            .then((user) => {
              if (user.length != 0)
                next(new Error('Email já está sendo utilizado'));
              next();
            })
            .catch((onError) => console.log(onError));
        },
        isEmail: {
          args: true,
          msg: "formato do email inválido",
        }
      }
    },
    senha: {
      type: DataTypes.STRING,
      validate: {
        isAllowNull: (value, next) => {
          if (value === "") next(new Error('o campo senha é obrigatório'));
          next();
        },
        len: {
          args: [6, 60],
          msg: 'o campo senha deve ter no mínimo 6 caracteres'
        },
      },

    },
    url_avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios'
  });

  Usuario.beforeCreate(async (usuario) => {
    const saltRounds = 10;
    usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
  });

  return Usuario;
};