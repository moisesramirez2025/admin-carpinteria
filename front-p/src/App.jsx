import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Productos from "./pages/Productos";
import Cotizaciones from "./pages/Cotizaciones";
import Admin from "./pages/Admin";
import Cotizacion from "./pages/cotizacionAdmin";
import Addproductos from "./pages/productosAdmi";
import "./app.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas dentro del Layout principal */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Productos />} />
          <Route path="cotizaciones" element={<Cotizaciones />} />
          {/* Ruta /admin con subrutas */}
        <Route path="admin" element={<Admin />}>
          <Route path="cotizacion" element={<Cotizacion />} />
          <Route path="addproductos" element={<Addproductos />} />
        </Route>
        </Route>

        
      </Routes>
    </Router>
  );
}

export default App;
