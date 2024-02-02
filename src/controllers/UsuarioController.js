const Controller = require('./Controller.js');
const UsuarioServices = require('../services/UsuarioServices.js');
const bcrypt = require('bcrypt')
const usuarioServices = new UsuarioServices();

class UsuarioController extends Controller {
    constructor() {
        super(usuarioServices);
    }
    async criar(req, res) {
        if (req.body?.senha?.length < 6) {
            return res.status(400).json({ erro: "Senha deve conter no mínimo 6 caracteres" })
        }
        if (!req.body.senha) {
            return res.status(400).json({ erro: "Campo senha obrigatório" })
        }
        req.body.senha = await bcrypt.hash(req.body.senha, 10);
        this.criaNovo(req, res)
    }
}

module.exports = UsuarioController