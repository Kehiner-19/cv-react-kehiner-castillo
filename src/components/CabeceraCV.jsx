import "./CabeceraCV.css";

export default function CabeceraCV() {
  return (
    <header className="cabecera-cv">
      <h1>Kehiner Castillo Vasquez</h1>
      <h2>Desarrollador UI Frontend</h2>

      <p>📞 Teléfono: 304 433 0797</p>
      <p>📧 Email: Kehiner71@gmail.com</p>
      <p>📍 Medellín, Colombia</p>

      <figure>
        <img
          src="https://i.pinimg.com/236x/30/8d/79/308d795c3cac0f8f16610f53df4e1005.jpg"
          alt="Foto de perfil de Kehiner Castillo"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginTop: "10px"
          }}
        />
        <figcaption>Foto de Perfil</figcaption>
      </figure>
    </header>
  );
}