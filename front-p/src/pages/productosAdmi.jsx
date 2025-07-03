
import { useEffect, useState } from "react";
import {
  obtenerProductos,
  crearProducto,
  eliminarProducto,
} from "../api/productos";
import "./productos.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const data = await obtenerProductos();
    setProductos(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevo = await crearProducto({
      nombre,
      descripcion,
      precio: parseFloat(precio),
      imagen,
    });
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setImagen("");
    cargarProductos();
  };

  const handleEliminar = async (id) => {
    await eliminarProducto(id);
    cargarProductos();
  };

  return (
    <div style={{ padding: "2rem" }} >
      <h1>Productos de Carpintería</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <br />
        <input
          placeholder="Precio"
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <br />
        <input
          placeholder="Imagen (URL o nombre)"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <br />
        <button type="submit">Agregar Producto</button>
      </form>

      <ul>
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
            <button onClick={() => handleEliminar(p._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

