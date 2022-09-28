const express = require("express");

const { matematicas } = require("../data/cursos.js").infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.use(express.json());

routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultado = matematicas.filter((e) => e.tema === tema);

  if (resultado.length === 0) {
    return res.status(404).send(`No se encontro el tema ${tema}.`);
  }
  res.send(JSON.stringify(resultado));
});

module.exports = routerMatematicas;
