const express = require("express");
const routes = require("./routes");
const handleError = require("./middlewares/handleError");
const requestLog = require("./middlewares/requestlog");
const db = require("./database");

const server = express();

db.hasConection();

server.use(express.json());
server.use(requestLog);

server.use(routes);

server.use(handleError);

server.listen(3000, () => console.log("Servidor rodando na porta 3000"));