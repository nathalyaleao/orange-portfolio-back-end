const express = require('express');

const usuarios = require('./usuariosRouter.js');
const projetos = require('./projetoRouter.js');


module.exports = app => {
    app.use(
        express.json(),
        usuarios,
        projetos,
    );
};

