const Usuario = require('../../models/Usuario');
const jwt = require('jsonwebtoken');

// Registrar un nuevo usuario (por defecto rol: cliente)
exports.registrarUsuario = async (req, res) => {
    try {
        const { correo, contraseña, rol } = req.body;
        // Evitar duplicados
        const existe = await Usuario.findOne({ correo });
        if (existe) {
            return res.status(400).json({ mensaje: 'El correo ya está registrado' });
        }
        const usuario = new Usuario({ correo, contraseña, rol: rol || 'cliente' });
        await usuario.save();
        res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};