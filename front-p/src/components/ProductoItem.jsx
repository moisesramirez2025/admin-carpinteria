import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductoItem({ producto }) {
  const [showMsg, setShowMsg] = useState(false);
  const navigate = useNavigate();

  // Función para el botón Comprar
  const handleComprar = () => {
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000); // Oculta el mensaje después de 2 segundos
  };

  // Función para el botón Cotizar
  const handleCotizar = () => {
    navigate("/cotizaciones", { state: { referencia: producto.nombre } });
  };

  return (
    <li style={{ marginBottom: "1rem" }}>
      {/* Mensaje flotante para Comprar */}
      {showMsg && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000
        }}>
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            textAlign: "center",
            maxWidth: "90vw"
          }}>
            <strong>Esta parte aún está en desarrollo</strong>
          </div>
        </div>
      )}

      <strong>Lo mas vendido.</strong>
      {producto.imagen && (
        <img
          src={producto.imagen}
          alt={producto.nombre}
        />
      )}
      <strong>{producto.nombre}</strong>
      <br />
      <p id="Precio">${producto.precio}</p>
      <p>{producto.descripcion}</p>

      <div className="opcionIten">
        <button onClick={handleComprar}>Comprar</button>
        <button onClick={handleCotizar}>Cotizar</button>
      </div>
    </li>
  );
}

export default ProductoItem;