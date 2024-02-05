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
            const project = await this.entidadeService.pegaProjetoWithUsuario(novoRegistroCriado.id)
            return res.status(200).json(project);
        } catch (erro) {
            console.log(erro.message)
            
            return res.status(400).json({ erro: erro.message })
        }
    }

    async pegaUmPorId(req, res) {
        const { id } = req.params;
        try {
            const umRegistro = await this.entidadeService.pegaProjetoWithUsuario(Number(id));
            return res.status(200).json(umRegistro);
        } catch (erro) {

            return res.status(400).json({ erro: erro.message })
        }
    }
}

module.exports = ProjetoController