const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactoRutas = require('./routes/contactosRutas');
const productoRutas = require('./routes/productoRutas');
const cotizacionRutas = require('./routes/cotizacionRutas');
const usuariosRutas = require('./routes/usuariosRutas');
require("dotenv").config();




const app = express();


connectDB();


app.use(express.json());

app.use(cors());

app.use('/api', productoRutas);
app.use('/api', contactoRutas);
app.use('/api', cotizacionRutas);
app.use('/usuarios', usuariosRutas);

app.get("/", (req, res)=>{
  res.send("todo bien po aqui")
})





const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
