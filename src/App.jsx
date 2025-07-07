import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";


const datosPersonales = {
  nombre: "Kehiner Castillo Vasquez",
  cargo: "Desarrollador UI Frontend",
  ciudad: "Medellín, Colombia",
  contacto: "kehiner17@gmail.com",
  telefono: "304 433 0797",
  foto: "https://i.pinimg.com/236x/30/8d/79/308d795c3cac0f8f16610f53df4e1005.jpg" // o URL real de tu foto
};

const resumen = "Tecnólogo en Análisis y Desarrollo de Software con experiencia en desarrollo web y móvil. Me apasiona la tecnología, la programación y la resolución de problemas. Me destaco por mi compromiso, capacidad de aprendizaje continuo y habilidades para el trabajo en equipo. Busco oportunidades para aplicar mis conocimientos en proyectos reales y seguir creciendo profesionalmente.";

const habilidades = [
  "Desarrollo con HTML, CSS, JavaScript y React",
  "Trabajo en equipo y colaboración ágil (Scrum)",
  "Comunicación asertiva y pensamiento analítico",
  "Adaptabilidad y aprendizaje continuo"
];

const experiencias = [
  { cargo: "Desarrollador Web", empresa: "Freelance", periodo: "2023 - Presente" },
  { cargo: "Diseñador Frontend", empresa: "Proyecto SENA", periodo: "2022 - 2023" }
];

const estudios = [
  { titulo: "Tecnólogo en ADSI", institucion: "SENA", periodo: "2024" },
  { titulo: "Curso de ReactJS", institucion: "Platzi", periodo: "2023" },
  { titulo: "Responsive Web Design", institucion: "freeCodeCamp", periodo: "2022" }
];

const tecnologias = [
  { id: 1, nombre: "React", tipo: "frontend" },
  { id: 2, nombre: "Node.js", tipo: "backend" },
  { id: 3, nombre: "JavaScript", tipo: "frontend" },
  { id: 4, nombre: "PostgreSQL", tipo: "base de datos" }
];

<StackTecnologias technologies={tecnologias} />

function App() {
  return (
    <div>
      <CabeceraCV {...datosPersonales} />
      <Perfil resumen={resumen} habilidades={habilidades} />
      <Experiencia experiencia={experiencias} />
      <Educacion estudios={estudios} />
      <StackTecnologias technologies={tecnologias} />
    </div>
  );
}

export default App;
