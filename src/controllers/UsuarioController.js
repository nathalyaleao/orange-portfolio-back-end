const Controller = require('./Controller.js');
const UsuarioServices = require('../services/UsuarioServices.js');
const usuarioServices = new UsuarioServices();

class UsuarioController extends Controller {
    constructor() {
        super(usuarioServices);
    }

    async criaNovo(req, res) {
        let dadosParaCriacao = req.body;
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
            return res.status(200).json(novoRegistroCriado);
        } catch (erro) {
            return res.status(400).json({ erro: erro.message })
        }
    }
}

module.exports = UsuarioController