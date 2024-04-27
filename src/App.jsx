// Importación de componentes y elementos necesarios de react-router-dom
import { Route, Routes } from "react-router-dom";

// Importación de componentes de tus vistas y componentes personalizados
import NavigationBar from "./components/NavigationBar"; // Barra de navegación
import Home from "./views/Home"; // Vista de la página de inicio
import Contacto from "./views/Contacto"; // Vista de la página de contacto
import NotFound from "./views/NotFound"; // Vista de página no encontrada

// Definición del componente principal de la aplicación, App
const App = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <NavigationBar />
      {/* Rutas de la aplicación */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path='/' element={<Home />} />
        {/* Ruta para la página de contacto */}
        <Route path='/Contacto' element={<Contacto />} />
        {/* Ruta para manejar cualquier URL no coincidente */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

// Exportación del componente App
export default App;
