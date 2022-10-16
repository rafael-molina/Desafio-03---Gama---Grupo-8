const express = require("express");
const routes = express.Router();

routes.get("/psicologos");
routes.get("/psicologos/:id");
routes.post("/psicologos");
routes.put("/psicologos/:id");
routes.delete("/psicologos/:id");


module.exports = routes;