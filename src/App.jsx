import { useState } from "react";
import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import FormularioTecnologia from "./components/FormularioTecnologia.jsx";
import Habilidades from "./components/Habilidades.jsx"; // si no existe, crea este componente simple

const datosPersonales = {
  nombre: "Kehiner Castillo Vasquez",
  cargo: "Desarrollador UI Frontend",
  ciudad: "Medellín, Colombia",
  contacto: "kehiner17@gmail.com",
  telefono: "304 433 0797",
  foto: "https://i.pinimg.com/236x/30/8d/79/308d795c3cac0f8f16610f53df4e1005.jpg"
};

const resumen = "Tecnólogo en Análisis y Desarrollo de Software con experiencia en desarrollo web y móvil. Me apasiona la tecnología, la programación y la resolución de problemas. Me destaco por mi compromiso, capacidad de aprendizaje continuo y habilidades para el trabajo en equipo. Busco oportunidades para aplicar mis conocimientos en proyectos reales y seguir creciendo profesionalmente.";

const experiencias = [
  { cargo: "Desarrollador Web", empresa: "Freelance", periodo: "2023 - Presente" },
  { cargo: "Diseñador Frontend", empresa: "Proyecto SENA", periodo: "2022 - 2023" }
];

const estudios = [
  { titulo: "Tecnólogo en ADSI", institucion: "SENA", periodo: "2024" },
  { titulo: "Curso de ReactJS", institucion: "Platzi", periodo: "2023" },
  { titulo: "Responsive Web Design", institucion: "freeCodeCamp", periodo: "2022" }
];

const habilidadesIniciales = [
  "Desarrollo con HTML, CSS, JavaScript y React",
  "Trabajo en equipo y colaboración ágil (Scrum)",
  "Comunicación asertiva y pensamiento analítico",
  "Adaptabilidad y aprendizaje continuo"
];

const tecnologiasIniciales = [
  { id: 1, nombre: "React", tipo: "frontend" },
  { id: 2, nombre: "Node.js", tipo: "backend" },
  { id: 3, nombre: "JavaScript", tipo: "frontend" },
  { id: 4, nombre: "PostgreSQL", tipo: "base de datos" }
];

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
console.log("Cambio de prueba");

export default App;
