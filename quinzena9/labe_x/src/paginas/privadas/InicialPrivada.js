import React from "react";
import { useHistory } from "react-router-dom";
import { viagens, administrar } from "../../routes/CaminhosPaginas";

const InicialPrivada = () => {
  const history = useHistory();

  return (
    <main>
      <h1>privada</h1>

      <button onClick={() => viagens(history)}>Controlar Viagens</button>
      <button onClick={() => administrar(history)}>Adm</button>
    </main>
  );
};

export default InicialPrivada;
