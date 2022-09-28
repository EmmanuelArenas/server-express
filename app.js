const express = require("express");
const app = express();

const { infoCursos } = require("./data/cursos.js");
// console.log(infoCursos);

//Routers
const routerProgramacion = require("./routers/programacion.js");
app.use("/api/cursos/programacion", routerProgramacion);

const routerMatematicas = require("./routers/matematicas.js");
app.use("/api/cursos/matematicas", routerMatematicas);

// Routing
app.get("/", (req, res) => {
  res.send("Servidor Express :D");
});

app.get("/api/cursos", (req, res) => {
  // res.send(infoCursos);
  res.send(JSON.stringify(infoCursos));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}...`);
});
