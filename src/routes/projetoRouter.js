const { Router } = require('express');
const ProjetoController = require('../controllers/ProjetoController.js');

const projetoController = new ProjetoController();
const router = Router();

router.get('/projetos', (req, res) => projetoController.pegaTodos(req, res)); //Pega todos
router.get('/projetos/:id', (req, res) => projetoController.pegaUmPorId(req, res));
router.get('/projetos/user/:id', (req, res) => projetoController.pegaTodosdeUmUsuario(req, res)); // Pega de usuario
router.post('/projetos', (req, res) => projetoController.criaNovo(req, res));
router.put('/projetos/:id', (req, res) => projetoController.atualiza(req, res));
router.delete('/projetos/:id', (req, res) => projetoController.exclui(req, res));

module.exports = router;

