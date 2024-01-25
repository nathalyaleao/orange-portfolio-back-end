import express from "express";
import index from "./index.js";

const routes = express.Router();

routes.get("/", index.addUser);

export { routes as default };
