export default function CabeceraCV({ nombre, cargo, contacto, ciudad, telefono, foto }) {
  return (
    <header className="cabecera-cv">
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>

      <p>📞 Teléfono: {telefono}</p>
      <p>📧 Email: {contacto}</p>
      <p>📍 {ciudad}</p>

      <figure>
        <img
          src={foto}
          alt={`Foto de perfil de ${nombre}`}
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


