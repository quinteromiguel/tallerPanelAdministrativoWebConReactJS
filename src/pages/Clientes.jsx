import logo from '../assets/images/snoppy.jpg'; // Ajusta la ruta si es necesario

function Clientes() {
  return (
    <div className="container mt-4 text-center">
      <h1 className="text-center">Clientes</h1>
      <p>Bienvenido a la sección de clientes.</p>
      <img src={logo} alt="Logo" className="logo-grande mt-3" />
    </div>
  );
}

export default Clientes;

  