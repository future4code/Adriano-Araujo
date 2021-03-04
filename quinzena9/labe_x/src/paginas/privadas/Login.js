import React from "react";
import { useHistory } from "react-router-dom";
import { inicialPrivada } from "../../routes/CaminhosPaginas";

const Login = () => {
  const history = useHistory();

  return (
    <main>
      <h1>Login </h1>

      <input placeholder={"usuario"} />
      <input placeholder={"senha"} />

      <button onClick={() => inicialPrivada(history)}>ok</button>
    </main>
  );
};

export default Login;
