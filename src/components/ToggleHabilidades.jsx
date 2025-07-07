import React from 'react';

const ToggleHabilidades = ({ mostrar, toggle }) => {
  return (
    <button onClick={toggle}>
      {mostrar ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
    </button>
  );
};

export default ToggleHabilidades;
