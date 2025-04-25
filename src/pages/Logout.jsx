import logo from '../assets/images/snoppy.jpg';

function Logout() {
  return (
    <div className="container mt-4 text-center">
      <h1 className="text-center">Logout</h1>
      <p>Bienvenido a la sección de Logout. </p>
      <img src={logo} alt="Logo" className="logo-grande mt-3" />
    </div>
  );
}

export default Logout;

  