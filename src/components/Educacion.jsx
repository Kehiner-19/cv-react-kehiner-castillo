export default function Educacion({ estudios = [] }) {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {Array.isArray(estudios) && estudios.map((item, index) => (
          <li key={index}>
            <strong>{item.titulo}</strong> - {item.institucion} ({item.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
console.log("Cambio de prueba");