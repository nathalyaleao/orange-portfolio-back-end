const Controller = require('./Controller.js');
const ProjetoServices = require('../services/ProjetoServices.js');
const projetoServices = new ProjetoServices();

class ProjetoController extends Controller {
    constructor() {
        super(projetoServices);
    }
}

module.exports = ProjetoController