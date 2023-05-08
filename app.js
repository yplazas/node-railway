require('dotenv').config();

// librerias necesarias
const express = require("express");
const hbs = require("hbs");


const app = express();
const port = process.env.PORT;

//uso de HBS
app.set("view engine", "html");
app.engine("html", require("hbs").__express);
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Servidor Estatico
app.use(express.static("public"));

//request, response

//renderizar paginas
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Yeison Plazas",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic");
});

app.get("/elements", (req, res) => {
  res.render("elements");
});

// Pagina principal

// app.get("/", (req, res) => {
//   res.send("esto es una prueba del servidor");
// });

//uso de Express normal

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});


//escuchar el puerto del servidor
app.listen(port);
