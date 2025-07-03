const Usuario = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

exports.iniciarSesion = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res
        .status(400)
        .json({ mensaje: "Correo o contraseña incorrectos" });
    }
    const esValida = await usuario.compararContraseña(contraseña);
    if (!esValida) {
      return res
        .status(400)
        .json({ mensaje: "Correo o contraseña incorrectos" });
    }
    // Generar token JWT
    const token = jwt.sign(
      { id: usuario._id, rol: usuario.rol, correo: usuario.correo },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ token, mensaje: "Inicio de sesión exitoso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
