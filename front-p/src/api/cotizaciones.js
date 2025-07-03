const API_URL = "http://localhost:3000";

export async function obtenerCotizaciones() {
  const res = await fetch(`${API_URL}/api/cotizaciones`);
  return res.json();
}

export async function crearCotizacion(data) {
  const res = await fetch(`${API_URL}/api/cotizaciones`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
