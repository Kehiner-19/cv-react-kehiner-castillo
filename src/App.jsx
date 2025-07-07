import { useState } from "react";
import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import FormularioTecnologia from "./components/FormularioTecnologia.jsx";
import Habilidades from "./components/Habilidades.jsx";

// 📦 Importación de datos desde cvData.js
import {
  datosPersonales,
  resumen,
  experiencias,
  estudios,
  habilidadesIniciales,
  tecnologiasIniciales
} from "./cvData";

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const toggleHabilidades = () => {
    setMostrarHabilidades(prev => !prev);
  };

  const agregarTecnologia = (nombre) => {
    const nueva = {
      id: tecnologias.length + 1,
      nombre,
      tipo: "otro"
    };
    setTecnologias([...tecnologias, nueva]);
  };

  return (
    <div>
      <CabeceraCV {...datosPersonales} />
      <Perfil resumen={resumen} habilidades={habilidadesIniciales} />
      <Experiencia experiencia={experiencias} />
      <Educacion estudios={estudios} />

      {/* COMPONENTES INTERACTIVOS */}
      <ToggleHabilidades mostrar={mostrarHabilidades} toggle={toggleHabilidades} />
      {mostrarHabilidades && <Habilidades habilidades={habilidadesIniciales} />}

      <FormularioTecnologia onAgregar={agregarTecnologia} />
      <StackTecnologias technologies={tecnologias} />
    </div>
  );
}

export default App;

