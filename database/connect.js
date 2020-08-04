var mongoose = require("mongoose");
mongoose.connect("mongodb://172.23.0.2:27017/musicdatabase",{useNewUrlParser: true});
var db = mongoose.connection;
db.on("error",()=>{
    console.log("ERROR no se puede conectar a la base de datos")
})
db.on("open",()=>{
    console.log("Conexion exitosa a la base de datos");
})
module.exports = mongoose;