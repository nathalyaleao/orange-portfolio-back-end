const Services = require('./Services.js')
const dataSource = require('../models');
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


    async pegaTodosOsRegistros(id) {
      return dataSource[this.model].findAll({
          raw: true,
          include: [{
            model: dataSource['Usuario'],
            required: true,
            attributes: ['nome', 'sobrenome']
          }],
          order: [['updatedAt', 'DESC' ]]
        });
  }







}
module.exports = ProjetoServices;