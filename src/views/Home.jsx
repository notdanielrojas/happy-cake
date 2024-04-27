// Importación del componente Container de react-bootstrap
import { Container } from "react-bootstrap";

// Definición del componente Home
const Home = () => {
  return (
    // Contenedor de Bootstrap con clases de estilización y alineación
    <Container
      className='contacto d-flex flex-column justify-content-center align-items-center w-100'
      style={{ minHeight: "90vh" }} // Establece la altura mínima del contenedor al 90% de la altura de la ventana del navegador
    >
      {/* Título de la página de inicio */}
      <h1 className='titulo-home'>
        Bienvenido a <span className='fw-bold'>Happy Cake</span>
      </h1>
      {/* Subtítulo de la página de inicio */}
      <h6 className='sub-titulo-home'> El lugar de los pasteles felices </h6>
      {/* Icono de la página de inicio */}
      <p className='icono-home'>🎂</p>
    </Container>
  );
};

// Exportación del componente Home
export default Home;
