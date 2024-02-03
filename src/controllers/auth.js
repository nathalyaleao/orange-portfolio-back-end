require('dotenv/config');
const dataSource = require('../models');
const axios = require('axios')
const querystring = require('node:querystring'); 
const jwt = require('jsonwebtoken');



const config = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    redirectUrl: process.env.REDIRECT_URL,
    clientUrl: process.env.CLIENT_URL,
    tokenSecret: process.env.TOKEN_SECRET,
    tokenExpiration: 24 * 60 * 60 * 1000,
    postUrl: 'https://jsonplaceholder.typicode.com/posts'
  };


const authParams = querystring.stringify({
client_id: config.clientId,
redirect_uri: config.redirectUrl,
response_type: 'code',
scope: 'openid profile email',
access_type: 'offline',  
state: 'standard_oauth',
prompt: 'consent',
});

const getTokenParams = (code) => querystring.stringify({
client_id: config.clientId,
client_secret: config.clientSecret,
code,
grant_type: 'authorization_code',
redirect_uri: config.redirectUrl,
});


module.exports = {
    async login(req, res) {
        try {

            const user = await dataSource['Usuario'].findOne({ 
                attributes: ['id', 'nome', 'sobrenome', 'url_avatar', 'senha', 'email'],
                where: { email:  req.body.email} });
            

            if(!user) return res.status(403).json({message: 'E-mail ou senha invalido.'})
            
            if(user.senha !== req.body.password) return res.status(403).json({message: 'E-mail ou senha invalido.'})
            

            delete user.dataValues.senha;

            const token = jwt.sign({ user }, config.tokenSecret, { expiresIn: config.tokenExpiration });

            res.cookie('token', token, {maxAge: config.tokenExpiration, httpOnly: true})

            res.json({ user, token, message: 'Login realizado com sucesso.'})

        } catch(error) {
            res.status(500).json({message: 'Erro interno do servidor.', error})
        }
    },

    async logged(req, res){
        try {
            const token = req.cookies.token || req.query.token;
            
            if (!token) return res.json({ logged: false, message: 'Usuário não logado.' });


            const { user } = jwt.verify(token, config.tokenSecret);
            const newToken = jwt.sign({ user }, config.tokenSecret, { expiresIn: config.tokenExpiration });


            res.cookie('token', newToken, {maxAge: config.tokenExpiration, httpOnly: true})

            res.json({ logged: true, user, token, message: 'Usuário logado.' });
        } catch(error) {
            res.status(500).json({message: 'Erro interno do servidor.', error})
        }
    },

    async loginByGoogle(req, res) {
        try {
            const { code } = req.query;
            if (!code) return res. status(400).json({ message: 'Authorization code must be provided' });
            const tokenParam = getTokenParams(code);

            const { data: { id_token} } = await axios.post(`${config.tokenUrl}?${tokenParam}`);
            if (!id_token) return res.status(400).json({ message: 'Auth error' });

            
            const { email, given_name, family_name, picture } = jwt.decode(id_token);

            const user = await dataSource['Usuario'].findOne({ 
                attributes: ['id', 'nome', 'sobrenome', 'url_avatar', 'email'],
                where: { email } });

            if(user) {
                const token = jwt.sign({ user }, config.tokenSecret, { expiresIn: config.tokenExpiration });

                res.cookie('token', token, {maxAge: config.tokenExpiration, httpOnly: true })

                res.json({haveAnAccount: true, user, token})
            }
            else {
                res.json({haveAnAccount: false, user: {email, given_name, family_name, picture}})
            } 
                
        } catch(error) {
            res.status(500).json({message: 'Erro interno do servidor.', error})
        }
    },

    async logout(req, res) {
        try {
            res.clearCookie('token').json({ message: 'Logged out' });
        } catch(error) {
            res.status(500).json({message: 'Erro interno do servidor.', error})
        }
    },

    async url(req, res){
        try {
            
            res.json({
                url: `${config.authUrl}?${authParams}`,
              });

        } catch(error) {
            res.status(500).json({message: 'Erro interno do servidor.', error})
        }

    },

}