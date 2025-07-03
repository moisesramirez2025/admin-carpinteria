const Contacto = require('../models/Contacto');

// Guardar un nuevo contacto
exports.crearContacto = async (req, res) => {
    try {
        const nuevoContacto = new Contacto(req.body);
        await nuevoContacto.save();
        res.status(201).json({ mensaje: 'Contacto guardado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todos los contactos
exports.listarContactos = async (req, res) => {
    try {
        const contactos = await Contacto.find();
        res.json(contactos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un contacto por ID
exports.eliminarContacto = async (req, res) => {
    try {
        await Contacto.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Contacto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};