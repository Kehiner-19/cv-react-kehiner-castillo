export default function StackTecnologias({ technologies }) {
  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "blue";
      case "backend":
        return "green";
      case "base de datos":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index} style={{ color: obtenerColor(tech.tipo) }}>
            {tech.nombre} - <em>{tech.tipo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
