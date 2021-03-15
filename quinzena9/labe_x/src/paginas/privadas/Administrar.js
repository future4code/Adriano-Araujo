import React from "react";
import { useHistory } from "react-router-dom";

import { voltar } from "../../rotas/CaminhosPaginas";

const Administrar = () => {
  const history = useHistory();

  return (
    <main>
      <h1>adm!</h1>

      <button onClick={() => voltar(history)}>voltar</button>
    </main>
  );
};

export default Administrar;
