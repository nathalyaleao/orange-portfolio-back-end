const Services = require('./Services.js')
const Sequelize = require("sequelize");
const dataSource = require('../models');
const Op = Sequelize.Op;
class ProjetoServices extends Services {
    constructor() {
        super('Projeto');
    }
    
    async pegaRegistrosPorUsuario(id) {
        return dataSource[this.model].findAll({
            raw: true,
            include: [{
              model: dataSource['Usuario'],
              required: true,
              attributes: ['nome', 'sobrenome']
            }],
            where: {
              user_id: id,
            },
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