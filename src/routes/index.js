const usuarios = require('./usuariosRouter.js');
const projetos = require('./projetoRouter.js');
const auth = require('./authRouter.js');


module.exports = app => {
    app.use(
        usuarios,
        projetos,
        auth,
    );
};

