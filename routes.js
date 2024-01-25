import express from "express";
import project from "./src/controller/projectController.js";

const routes = express.Router();

routes.get("/project", project.findAll);
routes.post("/project", project.addProject);
routes.get("/project/:id", project.findProject);
routes.get("/meusprojetos/:id", project.meusProjetos);
routes.put("/project/:id", project.updateProject);
routes.delete("/project/:id", project.deleteProject);

export { routes as default };
