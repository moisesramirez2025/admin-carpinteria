const mongoose = require('mongoose');

// const cotizacion = new mongoose.Schema({
//     nombre: { type: String, required: true, trim: true },
//     correo: { type: String, required: true, trim: true },
//     telefono: { type: String, trim: true },
//     detalles: { type: String, required: true, trim: true },
//     estado: { type: String, default: 'pendiente' }
// }, { timestamps: true });


const cotizacion = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    whatsapp: { type: String, required: true, trim: true }, // Nuevo campo
    modelo: {
        referencia: { type: String, required: true }, // ID o nombre del producto
        descripcion: { type: String, trim: true }     // Texto largo o detalles del modelo
    },
    descripcion: { type: String, required: true, trim: true }, // Texto largo
    estado: { type: String, default: 'pendiente' }
}, { timestamps: true });

module.exports = mongoose.model('Cotizacion', cotizacion);