require('dotenv/config');
const Controller = require('./Controller.js');
const UsuarioServices = require('../services/UsuarioServices.js');
const bcrypt = require('bcrypt')
const usuarioServices = new UsuarioServices();

const jwt = require('jsonwebtoken');

class UsuarioController extends Controller {
    constructor() {
        super(usuarioServices);
    }

    async criaNovo(req, res) {

        const dadosParaCriacao = req.body;

        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
            
            const user = { 
                id: novoRegistroCriado.id,
                nome: novoRegistroCriado.nome,
                sobrenome: novoRegistroCriado.sobrenome,
                url_avatar: novoRegistroCriado.url_avatar,
                email: novoRegistroCriado.email
            }

            const token = jwt.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: 24 * 60 * 60 * 1000 });

            res.cookie('token', token, { maxAge: 24 * 60 * 60 * 1000 , httpOnly: true })
            
            return res.json({ user, token, message: 'Cadastro feito com sucesso' })
            
        } catch (erro) {
            console.log(erro.message)

            return res.status(400).json({ erro: erro.message })
        }
    }

}

module.exports = UsuarioController