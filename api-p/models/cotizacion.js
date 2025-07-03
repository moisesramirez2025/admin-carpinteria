const mongoose = require('mongoose');

const cotizacion = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    correo: { type: String, required: true, trim: true },
    telefono: { type: String, trim: true },
    detalles: { type: String, required: true, trim: true },
    estado: { type: String, default: 'pendiente' }
}, { timestamps: true });

module.exports = mongoose.model('Cotizacion', cotizacion);