const express = require('express');

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ estado: "Projeto Rodando" });
});

module.exports = routes;
