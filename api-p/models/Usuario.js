const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Usuario = new mongoose.Schema({
    correo: { type: String, required: true, unique: true, trim: true },
    contraseña: { type: String, required: true },
    rol: { type: String, enum: ['administrador', 'cliente'], default: 'cliente' }
});

// Hashear contraseña antes de guardar
Usuario.pre('save', async function(next) {
    if (!this.isModified('contraseña')) return next();
    this.contraseña = await bcrypt.hash(this.contraseña, 10);
    next();
});

// Método para comparar contraseñas
Usuario.methods.compararContraseña = function(contraseña) {
    return bcrypt.compare(contraseña, this.contraseña);
};

module.exports = mongoose.model('Usuario', Usuario);