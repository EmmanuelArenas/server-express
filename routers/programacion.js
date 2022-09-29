const express = require("express");

const { programacion } = require("../data/cursos.js").infoCursos;

const routerProgramacion = express.Router();

// Middleware -> Las funciones middleware se ejecutan: Después de recibir una solicitud. Antes de enviar una respuesta. Tienen acceso al objeto de la respuesta y a next(), una función  que se llama para ejecutar el próximo middleware.
routerProgramacion.use(express.json());

routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(programacion));
});

routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = programacion.filter((e) => e.lenguaje === lenguaje);

  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // console.log(req.query.ordenar);
  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultado.sort((a, b) => a.vistas - b.vistas))
    );
  }
  res.send(JSON.stringify(resultado));
});

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const result = programacion.filter(
    (e) => e.lenguaje === lenguaje && e.nivel === nivel
  );

  if (result.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(result));
});

// POST -> ejemplo en archivo index.http
routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

// PUT -> ejemplo en archivo index.http
routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
  }
  res.json(programacion);
});

// PATCH -> ejemplo en archivo index.http
routerProgramacion.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex((e) => e.id == id);

  if (indice >= 0) {
    const cursoModificar = programacion[indice];
    Object.assign(cursoModificar, infoActualizada);
  }
  res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;
