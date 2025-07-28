import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="nav1">
        <div className="logo"><p>TuForma</p></div>
      <nav className="navbar">
        <Link to="/">Productos</Link>
        <Link to="/cotizaciones">Cotizaciones</Link>
        <Link to="/admin">admin</Link>
      </nav>
      </div>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
