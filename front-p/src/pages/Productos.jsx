import { useEffect, useState } from "react";
import {
  obtenerProductos
 
} from "../api/productos";
import ListaProductos from "../components/ListaProductos";
import "./productos.css";

function ProductosPage() {
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
      {/* Título de la página */}
      <h2 id="title-c">Explora nuestro catalógo de productos</h2>
      {/* Componente que muestra la lista de productos */}
      <ListaProductos productos={productos} />
    </div>
  );
}

export default ProductosPage;
