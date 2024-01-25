
const database = require('../models');
class UsuarioController {
    static async listarUsuarios(req, res) {
        try {
            const listaDeUsuarios = await database.Usuario.findAll();
            return res.status(200).json(listaDeUsuarios)

        } catch (erro) {

        }
    }
}

module.exports = UsuarioController