const API_URL = "http://localhost:3000"; // Cambia al puerto real de tu API

export async function obtenerProductos() {
  const res = await fetch(`${API_URL}/api/productos`);
  return res.json();
}

export async function crearProducto(data) {
  const res = await fetch(`${API_URL}/api/productos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function eliminarProducto(id) {
  const res = await fetch(`${API_URL}/api/productos/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
