import { NavLink } from 'react-router-dom';
import logo from '../assets/images/LOGO.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">

      <div className="container-fluid">
        {/* Usamos el logo como imagen en lugar del emoji */}
        <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="navbar-logo" />
        Taller Panel Administrativo web con ReactJS
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/clientes" className="nav-link">Clientes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/proveedor" className="nav-link">Proveedor</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/usuarios" className="nav-link">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/logout" className="nav-link">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
