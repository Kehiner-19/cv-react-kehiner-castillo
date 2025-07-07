export default function Experiencia({ experiencia }) {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {experiencia.map((edu, index) => (
          <li key={index}>
            <strong>{edu.titulo}</strong> - {edu.institucion} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
