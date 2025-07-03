import { Link, Outlet } from "react-router-dom";
import "./admin.css"

function Admin() {
  return (
    <div className="contenedorA">
      <nav className="nav">
  {/* <Link to="/">Productos</Link>
  <Link to="/cotizaciones">Cotizaciones</Link> */}
  <Link to="cotizacion">Ver solicitud de cotización</Link> 
   <Link to="addproductos">Agregar un producto</Link> 
</nav>

      <main className="contenido">
        <Outlet />
      </main>
    </div>
  );
}

export default Admin;


