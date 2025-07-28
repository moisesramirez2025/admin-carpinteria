import React, { useState } from "react";
import { crearCotizacion } from "../api/cotizaciones";
import "./coizaciones.css"
import { useLocation } from "react-router-dom";

function Cotizaciones() {
  const location = useLocation();
  const referenciaInicial = location.state?.referencia || "";
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [referencia, setReferencia] = useState(referenciaInicial);
  const [modeloDescripcion, setModeloDescripcion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearCotizacion({
      nombre,
      whatsapp,
      modelo: {
        referencia,
        descripcion: modeloDescripcion
      },
      descripcion
    });
    setNombre(""); setWhatsapp(""); setReferencia(""); setModeloDescripcion(""); setDescripcion("");
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 3000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1><strong>Envíanos tus ideas o elige un modelo disponible.</strong></h1>
      <form className="form-grid" onSubmit={handleSubmit}>
        <input id="i-1" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
        <input id="i-2" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="WhatsApp" required />
        <input id="i-3" value={referencia} onChange={e => setReferencia(e.target.value)} placeholder="Añadir modelo" required />
        {/* <input value={modeloDescripcion} onChange={e => setModeloDescripcion(e.target.value)} placeholder="Descripción del modelo" /> */}
        <textarea id="i-4" value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Escribe una descripcion..." required />
        <button id="btn" type="submit">Enviar Cotización</button>
      </form>
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
            <strong>¡Tu solicitud de cotización ya fue enviada!</strong>
            <p>Te contactaremos apenas sea revisada.</p>
          </div>
        </div>
      )}
    </div>

    );
}

export default Cotizaciones;