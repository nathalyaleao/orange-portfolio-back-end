'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projeto.belongsTo(models.Usuario, { foreignKey: 'user_id' });
    }
  }
  Projeto.init({
    user_id: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    tags: DataTypes.STRING,
    link: DataTypes.STRING,
    descricao: DataTypes.STRING,
    arquivo: DataTypes.STRING,
    data: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Projeto',
    tableName: 'projetos'
  });
  return Projeto;
};