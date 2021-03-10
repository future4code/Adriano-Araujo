import React, { useState } from "react";

function EntradaGeral(valor) {
  const [entrada, setEntrada] = useState(valor);

  const alteraEntrada = (evento) => {
    setEntrada(evento.target.value);
  };

  return [entrada, alteraEntrada];
};

export default EntradaGeral;

