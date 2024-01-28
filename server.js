const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const db = require("./src/db.js")
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
app.use(cors(corsOptions));
routes(app);


app.use(routes)
db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));
app.listen(3000, () => console.log(`Servidor iniciado na porta ${process.env.PORT}`));
