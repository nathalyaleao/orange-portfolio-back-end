const { Router } = require('express');
const ProjetoController = require('../controllers/ProjetoController.js');
const session = require('../middlewares/session.js');
const projetoController = new ProjetoController();
const router = Router();

router.get('/projetos', session.onlyUsers, (req, res) => projetoController.pegaTodos(req, res)); 
router.get('/projetos/user', session.onlyUsers, (req, res) => projetoController.pegaTodosdeUmUsuario(req, res)); 
router.get('/projetos/:id', session.onlyUsers, (req, res) => projetoController.pegaUmPorId(req, res));
router.post('/projetos', session.onlyUsers, (req, res) => projetoController.criaNovo(req, res));
router.put('/projetos/:id', session.onlyUsers, (req, res) => projetoController.atualiza(req, res));
router.delete('/projetos/:id', session.onlyUsers, (req, res) => projetoController.exclui(req, res));

module.exports = router;

