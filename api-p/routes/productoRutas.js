const express = require('express');
const router = express.Router();
const productoControl = require('../controllers/productoControlador');
const { soloAdmin, proteger } = require("../midleware/usuarioAut")

router.post('/productos', /*proteger, soloAdmin,*/ productoControl.crearProducto);
router.get('/productos', productoControl.listarProductos);
router.delete('/productos/:id', /*proteger, soloAdmin,*/ productoControl.eliminarProducto);

module.exports = router;