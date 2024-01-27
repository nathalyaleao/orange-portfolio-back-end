const express = require('express');

const projetos = require('./projetoRouter.js');


module.exports = app => {
    app.use(
        express.json(),
        projetos,
    );
};

