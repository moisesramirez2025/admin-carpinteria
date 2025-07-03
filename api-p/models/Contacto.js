const mongoose = require('mongoose');

const contacto = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    correo: { type: String, required: true, trim: true },
    telefono: { type: String, trim: true },
    mensaje: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Contacto', contacto);