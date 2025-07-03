import { useEffect, useState } from "react";
import {
  obtenerProductos
 
} from "../api/productos";
import "./productos.css";

function vApp() {
  const [productos, setProductos] = useState([]);
 

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const data = await obtenerProductos();
    setProductos(data);
  };

  
  return (
    <div style={{ padding: "2rem" }}>
      <h2 id="title-c" >Catálogo de Productos</h2>

     

      <ul id="product-list">
        {productos.map((p) => (
          <li key={p._id} style={{ marginBottom: "1rem" }}>
            <strong>{p.nombre}</strong> - ${p.precio}
            <p>{p.descripcion}</p>
            {p.imagen && (
              <img
                src={p.imagen}
                alt={p.nombre}
                width="100"
                style={{ display: "block" }}
              />
            )}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default vApp;
