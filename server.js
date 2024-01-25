const express = require('express')
require('dotenv').config()
const db = require("./src/db.js")
const routes = require("./src/routes/index.js")

const app = express();
routes(app);

app.use(express.json());
app.use(routes);
db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
