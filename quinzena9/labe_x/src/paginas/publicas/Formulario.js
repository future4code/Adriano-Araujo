import React from "react";
import { voltar } from "../../rotas/CaminhosPaginas";
import { useHistory } from "react-router-dom";

const Formulario = () => {
  const history = useHistory();

  return (
    <main>
      <h1>Forms</h1>

      <button onClick={() => voltar(history)}>voltar</button>
    </main>
  );
};

export default Formulario;
