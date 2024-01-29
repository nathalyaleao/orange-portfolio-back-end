require('dotenv/config');
const dataSource = require('../models');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.TOKEN_SECRET

module.exports = {
    onlyUsers(req, res, next) {
        try {
            const token = req.cookies.token || req.query.token || req.body.token; 

            if (!token) return res.status(401).send('Acesso não autorizado.');
            const { user } = jwt.verify(token, TOKEN_SECRET);

            req.user = user

            next()
        } catch {
            res.status(500).send(`Erro interno do servidor.`)
        }
    },

}