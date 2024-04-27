// Importación de los componentes Button, Form y Container de react-bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

// Definición del componente Contacto
const Contacto = () => {
  return (
    // Contenedor de Bootstrap con clases de estilización y alineación
    <Container
      className='contacto d-flex flex-column justify-content-center text-center w-100'
      style={{ minHeight: "90vh" }} // Establece la altura mínima del contenedor al 90% de la altura de la ventana del navegador
    >
      {/* Título del formulario */}
      <h1 className='titulo-contacto'>Cuéntanos, ¿En qué podemos ayudar?</h1>
      {/* Formulario de Bootstrap */}
      <Form>
        {/* Grupo de formulario para el campo de correo electrónico */}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          {/* Etiqueta del campo de correo electrónico */}
          <Form.Label className='fs-4'>Correo</Form.Label>
          {/* Campo de entrada para el correo electrónico */}
          <Form.Control
            type='email'
            placeholder='name@example.com' // Placeholder del campo de correo electrónico
            className='w-100' // Clase para hacer que el campo de entrada ocupe el 100% del ancho disponible
          />
        </Form.Group>
        {/* Grupo de formulario para el campo de descripción */}
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          {/* Etiqueta del campo de descripción */}
          <Form.Label className='fs-4'>Descripción</Form.Label>
          {/* Campo de entrada para la descripción */}
          <Form.Control
            type='text'
            className='w-100 pb-5' // Clase para hacer que el campo de entrada ocupe el 100% del ancho disponible y tenga un relleno inferior de 5px
          />
        </Form.Group>
        {/* Botón de envío del formulario */}
        <Button variant='danger' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

// Exportación del componente Contacto
export default Contacto;
