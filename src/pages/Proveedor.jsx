import logo from '../assets/images/snoppy.jpg';

function Proveedor() {
  return (
    <div className="container mt-4 text-center">
      <h1 className="text-center">Proveedor</h1>
      <p>Bienvenido a la sección de Proveedor. Aquí podrás gestionar todos los Proveedor registrados.</p>
      <img src={logo} alt="Logo" className="logo-grande mt-3" />
    </div>
  );
}

export default Proveedor;

  
  