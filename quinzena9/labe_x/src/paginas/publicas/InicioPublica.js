import React from "react";
import { useHistory } from "react-router-dom";
import { listaViagens, formulario } from "../../routes/CaminhosPaginas";

const InicialPublica = () => {
  const history = useHistory();

  return (
    <main>
      <h1>E ai? </h1>

      <button onClick={() => listaViagens(history)}>Viagens</button>
      <button onClick={() => formulario(history)}>Formulario</button>
    </main>
  );
};

export default InicialPublica;
