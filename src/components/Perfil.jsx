export default function Perfil({ resumen, habilidades }) {
  return (
    <section>
      <h3>Perfil</h3>
      <p>{resumen}</p>

      <h4>Habilidades destacadas:</h4>
      <ul>
        {habilidades.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
