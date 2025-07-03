const jwt = require('jsonwebtoken');
const Usuario = require("../models/Usuario");

// Verificar si el usuario está autenticado
exports.proteger = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ mensaje: 'No autorizado' });

    try {
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decodificado;
        next();
    } catch (error) {
        res.status(401).json({ mensaje: 'Token inválido' });
    }
};

// Verificar si el usuario es administrador
exports.soloAdmin = (req, res, next) => {
    
    if (req.usuario.rol !== 'administrador') {
        return res.status(403).json({ mensaje: 'Tienes que ser administrador para acceder aquí' });
    }
    next();
};