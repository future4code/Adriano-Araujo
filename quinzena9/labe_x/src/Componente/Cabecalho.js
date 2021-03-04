import React from "react";
import { Inicial } from "../routes/CaminhosPaginas";
import { useHistory } from "react-router-dom";

const Cabecalho = () => {
  const history = useHistory();

  return (
    <header>
      <button onClick={() => Inicial(history)}>Começo</button>
    </header>
  );
};

export default Cabecalho;
