const express = require('express');

const usuarios = require('./usuariosRouter.js');


module.exports = app => {
    app.use(
        express.json(),
        usuarios,
    );
};

