var express = require('express');
var router = express.Router();
var USER = require("../database/user");


/* GET home page. */
router.get('/', function(req, res, next) {
  var datos = req.query;
  var name = datos.name;
  console.log(datos);
  console.log(name);
  res.status(200).json({
    msn :"HOLA MUNDO"
  })
});
router.post("/usuarios",(req, res)=>{
  var datos = req.body;
  var typegustos = datos.gustos.split(",");
  var user = {};
  user["name"]=datos.name;
  user["lastname"]=datos.lastname;
  user["age"]=datos.age;
  user["gustos"]=typegustos;
  var newuser = new USER(user);
  newuser.save().then(()=>{
    res.status(200).json({msn:"Insercion exitosa"});
  })
  /**
   * name: String,
    lastname: String,
    age: Number,
    date: Date,
    typemusic: Array
   * 
   */
  
});


module.exports = router;


