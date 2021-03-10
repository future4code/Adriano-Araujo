import React, { useState } from "react";

function useEntradaGeral(valor) {
  const [entrada, setEntrada] = useState(valor);

  const alteraEntrada = (evento) => {
    setEntrada(evento.target.value);
  };

  return [entrada, alteraEntrada];
};

export default useEntradaGeral;

