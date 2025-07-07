import { useState } from 'react';

const FormularioTecnologia = ({ onAgregar }) => {
  const [tecnologia, setTecnologia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tecnologia.trim()) {
      onAgregar(tecnologia);
      setTecnologia('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
        placeholder="Nueva tecnología"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioTecnologia;
