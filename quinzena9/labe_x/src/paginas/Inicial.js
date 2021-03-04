import React from "react";
import { useHistory } from "react-router-dom";
import { InicialPublica, login } from "../routes/CaminhosPaginas";

const Inicial = () => {
  const history = useHistory();

  return (
    <main>
      <h1>LABE X</h1>

      <button onClick={() => login(history)}>adm</button>

      <button onClick={() => InicialPublica(history)}>area do usuario</button>
    </main>
  );
};

export default Inicial;
