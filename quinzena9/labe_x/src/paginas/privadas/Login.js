import React, { useEffect } from "react";
import EntradaGeral from "../../hooks/EntradaGeral";
import { useHistory } from "react-router-dom";
import { inicialPrivada } from "../../rotas/CaminhosPaginas";

const Login = () => {
  const [email, alteraEmail] = EntradaGeral("");
  const [senha, alteraSenha] = EntradaGeral("");
  const history = useHistory();

  return (
    <main>
      <h1>Login </h1>

      <input placeholder={"usuario"} value={email} onChange={alteraEmail} />
      <input
        placeholder={"senha"}
        type={"password"}
        value={senha}
        onchange={alteraSenha}
      />

      <button onClick={() => inicialPrivada(history)}>ok</button>
    </main>
  );
};

export default Login;
