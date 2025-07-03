const express = require('express');
const router = express.Router();
const contactoControl = require('../controllers/contactoControl');
const { proteger, soloAdmin } = require("../midleware/usuarioAut")

router.post('/contactos', contactoControl.crearContacto);
router.get('/contactos', proteger, soloAdmin, contactoControl.listarContactos);
router.delete('/contactos/:id', proteger, soloAdmin, contactoControl.eliminarContacto);

module.exports = router;