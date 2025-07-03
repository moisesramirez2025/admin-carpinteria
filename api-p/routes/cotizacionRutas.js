const express = require('express');
const router = express.Router();
const cotizacionControl = require('../controllers/cotizacionControlador');
const {proteger, soloAdmin} = require("../midleware/usuarioAut");


// Ruta para crear una nueva cotización
router.post('/cotizaciones', cotizacionControl.crearCotizacion);

// Ruta para listar todas las cotizaciones
router.get('/cotizaciones', /*proteger, soloAdmin,*/ cotizacionControl.listarCotizaciones);

// Ruta para eliminar una cotización por ID
router.delete('/cotizaciones/:id', /*proteger, soloAdmin, */cotizacionControl.eliminarCotizacion);

module.exports = router;