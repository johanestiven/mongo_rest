const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.json({
    'mensaje' : 'Bienvenido al APP de NODEJS + MONGOBD + ROBO 3T'})
});
 
app.get('/productos', function (req, res) {
  res.json({
    'data' : 'Aquí van los productos'})
});

app.post('/producto', function (req, res) {
  let datos = req.body;
  if (datos.nombre == undefined || datos.marca == undefined || datos.color == undefined){
    res.status(400).json({
      "err" : "Datos incompletos"

    });

  }else {res.json({
    'mensaje' : req.body
  })
  }
  
});

app.get('/producto/:id', function (req, res) {
  res.json({
    'data' : `Aquí recibi el ID para mostrar un producto. ID: ${req.params.id}`
  })
});

app.listen(3000, () =>  {
    console.log("Servidor ONLINE");
});
