const express = require("express");
const app = express();

const { infoCursos } = require("./cursos");
// console.log(infoCursos);

//Routers
const routerProgramacion = express.Router();
app.use("/api/cursos/programacion", routerProgramacion);

const routerMatematicas = express.Router();
app.use("/api/cursos/matematicas", routerMatematicas);

// Routing
app.get("/", (req, res) => {
  res.send("Servidor Express :D");
});

app.get("/api/cursos", (req, res) => {
  // res.send(infoCursos);
  res.send(JSON.stringify(infoCursos));
});

// cursos programacion por URL
routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = infoCursos.programacion.filter(
    (e) => e.lenguaje === lenguaje
  );

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
  const result = infoCursos.programacion.filter(
    (e) => e.lenguaje === lenguaje && e.nivel === nivel
  );

  if (result.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(result));
});

// cursos matematicas por URL
routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultado = infoCursos.matematicas.filter((e) => e.tema === tema);

  if (resultado.length === 0) {
    return res.status(404).send(`No se encontro el tema ${tema}.`);
  }
  res.send(JSON.stringify(resultado));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}...`);
});
