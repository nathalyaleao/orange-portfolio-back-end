const express = require('express');
const project = require("./src/services/Services.js");
const routes = express.Router();

routes.get("/project", project.pegaTodosOsRegistros);
routes.post("/project", project.addProject);
routes.get("/project/:id", project.findProject);
routes.get("/meusprojetos/:id", project.meusProjetos);
routes.put("/project/:id", project.updateProject);
routes.delete("/project/:id", project.deleteProject);

module.exports = routes;
