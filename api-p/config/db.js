const mongoose = require("mongoose");
require("dotenv").config();

const conectDB = async ()=>{
    try{
        await mongoose.connect(process.env.CADENA_CONEXION);
        console.log("conectado a la base de datos")
    }catch(err){
        console.error("error al conectar con la base de datos", err.message);
        process.exit(1) // esto es para detener la aplicacion si hay un erro al conenctar con la base de datos
    }
}

module.exports = conectDB;