const express = require("express");

const { programacion } = require("../data/cursos.js").infoCursos;

const routerProgramacion = express.Router();

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

module.exports = routerProgramacion;
