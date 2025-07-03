
import React, { useEffect, useState } from "react";
import { obtenerCotizaciones, crearCotizacion } from "../api/cotizaciones";
import "./coizaciones.css"

function Cotizaciones() {
  // const [cotizaciones, setCotizaciones] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [detalles, setDetalles] = useState("");

  // useEffect(() => {
  //   obtenerCotizaciones().then(setCotizaciones);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearCotizacion({ nombre, correo, telefono, detalles });
    setNombre(""); setCorreo(""); setTelefono(""); setDetalles("");
    obtenerCotizaciones().then(setCotizaciones);
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* <h2>Cotizaciones</h2>

      <ul>
        {cotizaciones.map((c) => (
          <li key={c._id}>
            <strong>{c.nombre}</strong> ({c.correo}) - {c.detalles}
          </li>
        ))}
      </ul> */} 

      <form onSubmit={handleSubmit}>
        <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" />
        <input value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo" />
        <input value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="Teléfono" />
        <textarea value={detalles} onChange={e => setDetalles(e.target.value)} placeholder="Detalles" />
        <button type="submit">Enviar Cotización</button>
      </form>
    </div>
  );
}

export default Cotizaciones;
