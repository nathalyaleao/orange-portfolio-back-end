const express = require('express');
const routes = require('./src/routes/index.js');
const db = require('./src/db.js');

const app = express();
routes(app);

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
