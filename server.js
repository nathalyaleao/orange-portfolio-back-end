const express = require('express')
const createError = require('http-errors');
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const routes = require("./src/routes/index.js")

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTION'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.static('src'));
app.use('/upload', express.static('upload'));
app.use(cors(corsOptions));
routes(app);
app.use((req, res, next) => {
  next(createError(404));
})
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});
app.listen(3000, () => console.log(`Servidor iniciado na porta 3000`));
