import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ estado: "Projeto Rodando" });
});

export { routes as default };
