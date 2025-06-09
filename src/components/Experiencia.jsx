export default function Educacion() {
  const educacion = [  
  { id: 1, titulo: "Ingeniería en Sistemas", universidad: "Universidad Nacional", periodo: "2018–2022" },
  { id: 2, titulo: "Técnico en Programación", universidad: "SENA", periodo: "2016–2017" },
  { id: 3, titulo: "Curso de React.js", universidad: "Platzi", periodo: "2023" },
  { id: 4, titulo: "Taller de Diseño UX/UI", universidad: "Google Actívate", periodo: "2022" },
  { id: 5, titulo: "Seminario de Ciberseguridad", universidad: "Fundación Telefónica", periodo: "2021" },
];


  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.universidad} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}