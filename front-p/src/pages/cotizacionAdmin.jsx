
import React, { useEffect, useState } from "react";
import { obtenerCotizaciones, crearCotizacion } from "../api/cotizaciones";
import "./coizaciones.css"

function Cotizacion() {
  const [cotizaciones, setCotizaciones] = useState([]);
  

 useEffect(() => {
    obtenerCotizaciones().then(setCotizaciones);
  }, []);

   
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Solicitudes de Cotización</h2>

      <ul>
        {cotizaciones.map((c) => (
          <li key={c._id}>
            <div><strong>{c.nombre}</strong> ({c.correo}) - {c.detalles}</div>
         <div>
          <button>eliminar</button>
         </div>
          </li>
        ))}
      </ul> 
      <p>holsa mundo</p>
    </div>
  );
}

export default Cotizacion;
