const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(" aqui mejoraras tu ortografia ");
});

app.get("/usuarios", (req, res) => {
  let usuarios = [
    { id: "01", nombre: "juan", apellido: "perez", telefono: 781695, correo:"juanperez@gmail.com", direccion:"cll 8 la granja" },
    { id: "02", nombre: "pedro", apellido: "osorio", telefono: 781546, correo:"pedroosorio@gmail.com", direccion:"cll 9 pradera" },
    { id: "03", nombre: "lucas", apellido: "santos", telefono: 781725, correo:"lucas-s@gmail.com", direccion:"cll 5 bonanza" },
    { id: "04", nombre: "andres", apellido: "soto", telefono: 781785, correo:"andres05@gmail.com", direccion:"cll 6b urbina" },

  ];
  res.send(usuarios);
});

app.get("/temas", (req, res) => {
  let temas = [
    { id: "11", nombre: "palabras con acento", id_usuario:"02"},
    { id: "12", nombre: "palabras con mayuscula", id_usuario:"01" },
    { id: "13", nombre: "palabras con y,ll" , id_usuario:"04" },
    { id: "14", nombre: "andrespalabras con h" , id_usuario:"03"},

  ];
  res.send(temas);
});

app.get("/actividades", (req, res) => {
  let actividades = [
    { id: "001", nombre: "mapa conceptual",tipo:"formativa", descripcion:"realizar la actividad de acuerdo a la lectura", fecha:"05/08/2019", id_tema:"12"},
    { id: "002", nombre: "taller",tipo:"formativa", descripcion:"desarrollar la lectura y responder las preguntas", fecha:"11/08/2019", id_tema:"14"},
     { id: "003", nombre: "infografia",tipo:"evaluativa", descripcion:"desarrollar la lectura y responder las preguntas", fecha:"11/08/2019", id_tema:"14"},
      { id: "004", nombre: "mapa mental",tipo:"evaluativa", descripcion:"desarrollar la lectura y responder las preguntas", fecha:"11/08/2019", id_tema:"14"},



  ];
  res.send(actividades);
});

app.get("/programas", (req, res) => {
  let programas = [
    { id: "987", nombre: "Informatica", semestre_cursado: "2", id_usuario: "87"},
    { id: "457", nombre: "sociales", semestre_cursado: "4", id_usuario: "30"},
    { id: "925", nombre: "Lengua castellana", semestre_cursado: "1", id_usuario: "65"},
    { id: "028", nombre: "ingles", semestre_cursado: "8", id_usuario: "34"},






  ];
  res.send(programas);
});

app.get("/notas", (req, res) => {
  let notas = [
    { id: "835", nota1: "5", id_evaluacion: "886"},
     { id: "037", nota1: "4", id_evaluacion: "886"},
      { id: "256", nota1: "2", id_evaluacion: "886"},
       { id: "047", nota1: "3", id_evaluacion: "886"},






  ];
  res.send(notas);
});
app.get("/evaluaciones", (req, res) => {
  let evaluaciones = [
    { id: "103", tipo: "acumulativa", duracion: "30 minutos", id_actividades: "980"},
     { id: "045", tipo: "seguimiento", duracion: "20 minutos", id_actividades: "345"},
      { id: "972", tipo: "definitiva", duracion: "50 minutos", id_actividades: "845"},
       { id: "065", tipo: "formativa", duracion: "20 minutos", id_actividades: "093"},





  ];
  res.send(evaluaciones);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
