const Services = require('./Services.js')
const Sequelize = require("sequelize");
const dataSource = require('../models');
const Op = Sequelize.Op;
class ProjetoServices extends Services {
    constructor() {
        super('Projeto');
    }
    
    async pegaProjetoWithUsuario(id) {
      return dataSource[this.model].findOne({
          raw: true,
          include: [{
            model: dataSource['Usuario'],
            required: true,
            attributes: ['nome', 'sobrenome', 'url_avatar']
          }],
          where: {
            id: id,
          },
          order: [['updatedAt', 'DESC' ]]
        });
  }

    
    async pegaRegistrosPorUsuario(id) {
        return dataSource[this.model].findAll({
            raw: true,
            include: [{
              model: dataSource['Usuario'],
              required: true,
              attributes: ['nome', 'sobrenome', 'url_avatar']
            }],
            where: {
              user_id: id,
            },
            order: [['updatedAt', 'DESC' ]]
          });
    }

    async pegaTodosOsRegistros() {
      return dataSource[this.model].findAll({
          raw: true,
          include: [{
            model: dataSource['Usuario'],
            required: true,
            attributes: ['nome', 'sobrenome', 'url_avatar']
          }],
          order: [['updatedAt', 'DESC' ]]
        });
  }

    async pegaRegistrosPorTags(tag) {
      return dataSource[this.model].findAll({
          where: {
            tags: { [Op.like]: `%${tag}%` },
          },
          order: [['updatedAt', 'DESC' ]]
        });
  }

}
module.exports = ProjetoServices;