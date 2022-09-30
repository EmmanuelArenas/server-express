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

  resultado.length === 0
    ? res.status(404).send(`No se encontro el tema ${tema}.`)
    : res.status(404);

  res.send(JSON.stringify(resultado));
});

// POST -> ejemplo en archivo index.http
routerMatematicas.post("/", (req, res) => {
  let cursoNuevo = req.body;
  matematicas.push(cursoNuevo);
  res.json(matematicas);
});

// PUT -> ejemplo en archivo index.http
routerMatematicas.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex((e) => e.id == id);

  indice >= 0 ? (matematicas[indice] = cursoActualizado) : res.status(404);

  res.json(matematicas);
});

// PATCH -> ejemplo en archivo index.http
routerMatematicas.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex((e) => e.id == id);

  if (indice >= 0) {
    const cursoModificaar = matematicas[indice];
    Object.assign(cursoModificaar, infoActualizada);
  }
  res.json(matematicas);
});

// DELETE -> ejemplo en archivo index.http
routerMatematicas.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = matematicas.findIndex((e) => e.id == id);

  indice >= 0 ? matematicas.splice(indice, 1) : res.status(404);

  res.json(matematicas);
});
module.exports = routerMatematicas;
