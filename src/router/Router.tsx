import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "../pages/Home";
import Header from "../components/header/Header";
import Habilidades from "../pages/Habilidades";
import Proyectos from "../pages/Proyectos";
import Formacion from "../pages/Formacion";
import Experiencia from "../pages/Experiencia";
import Contacto from "../pages/Contacto";
import { Footer } from "../components/footer/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/experiencia" element={<Experiencia />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;
