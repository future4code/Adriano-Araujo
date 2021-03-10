import React from "react";
import { useHistory } from "react-router-dom";
import { voltar } from "../../rotas/CaminhosPaginas";

const Viagens = () => {
  const history = useHistory();

  return (
    <main>
      <h1>controle de viagens </h1>

      <button onClick={() => voltar(history)}>voltar</button>
    </main>
  );
};

export default Viagens;
