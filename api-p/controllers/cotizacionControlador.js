const Cotizacion = require('../models/cotizacion');

// Crear una nueva cotización
exports.crearCotizacion = async (req, res) => {
    try {
        // Crea una nueva instancia de Cotizacion con los datos recibidos
        const nuevaCotizacion = new Cotizacion(req.body);
        await nuevaCotizacion.save(); // Guarda en la base de datos
        res.status(201).json({ mensaje: 'Cotización enviada correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todas las cotizaciones
exports.listarCotizaciones = async (req, res) => {
    try {
        // Busca todas las cotizaciones en la base de datos
        const cotizaciones = await Cotizacion.find();
        res.json(cotizaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar una cotización por ID
exports.eliminarCotizacion = async (req, res) => {
    try {
        // Elimina la cotización que coincide con el ID recibido
        await Cotizacion.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Cotización eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};