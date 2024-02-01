const Controller = require('./Controller.js');
const ProjetoServices = require('../services/ProjetoServices.js');
const projetoServices = new ProjetoServices();

class ProjetoController extends Controller {
    constructor() {
        super(projetoServices);
    }

    async criaNovo(req, res) {
        //id
        let dadosParaCriacao = req.body;

        dadosParaCriacao = {...dadosParaCriacao, user_id: req.user.id}
        
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
            return res.status(200).json(novoRegistroCriado);
        } catch (erro) {
            console.log(erro.message)
            
            return res.status(400).json({ erro: erro.message })
        }
    }
}

module.exports = ProjetoController