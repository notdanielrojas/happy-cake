// Importación de componentes y elementos necesarios de react-bootstrap y react-router-dom
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// Definición del componente NavigationBar
const NavigationBar = () => {
  return (
    // Navbar de Bootstrap con fondo de peligro y variante oscura
    <Navbar bg='danger' variant='dark'>
      {/* Contenedor de Bootstrap con clases de alineación */}
      <Container className='justify-content-space-around'>
        <div>
          {/* Enlace a la página de inicio */}
          <Link to='/' className='text-white fs-5 ms-3 text-decoration-none'>
            🏠 Home
          </Link>
          {/* Enlace a la página de contacto */}
          <Link
            to='/Contacto'
            className='text-white fs-5 ms-3 text-decoration-none'
          >
            📝 Contacto
          </Link>
        </div>
        {/* Marca de la Navbar */}
        <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

// Exportación del componente NavigationBar
export default NavigationBar;
