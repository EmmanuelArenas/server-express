const express = require("express");
const app = express();

const { infoCursos } = require("./cursos");
// console.log(infoCursos);

// Routing
app.get("/", (req, res) => {
  res.send("Servidor Express :D");
});

app.get("/api/cursos", (req, res) => {
  // res.send(infoCursos);
  res.send(JSON.stringify(infoCursos));
});

// cursos programacion
app.get("/api/cursos/programacion", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = infoCursos.programacion.filter(
    (e) => e.lenguaje === lenguaje
  );

  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  res.send(JSON.stringify(resultado));
});

// cursos matematicas
app.get("/api/cursos/matematicas", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

app.get("/api/cursos/matematicas/:tema", (req, res) => {
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
