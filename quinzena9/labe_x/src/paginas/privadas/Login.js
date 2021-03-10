import React, { useEffect } from "react";
import axios from "axios";
import EntradaGeral from "../../hooks/EntradaGeral";
import { useHistory } from "react-router-dom";
import { inicialPrivada } from "../../rotas/CaminhosPaginas";

const Login = () => {
  const [email, alteraEmail] = EntradaGeral("");
  const [senha, alteraSenha] = EntradaGeral("");
  const history = useHistory();

  const enviar = () => {
    const body = {
      email: email,
      password: senha,
    };

    const header = (token) => {
      return {
        headers: {
          auth: token
        }
      };
    };
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/login",
      body
    ).then((resposta)=>{
      localStorage.setItem("token", resposta.data.token)
      inicialPrivada(history)
    }).catch((error)=>{
      alert(error)
    })
  };

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      inicialPrivada(history)
    } 
  },[history])

  return (
    <main>
      <h1>Login </h1>

      <input placeholder={"usuario"} value={email} onChange={alteraEmail} />
      <input
        placeholder={"senha"}
        type={"password"}
        value={senha}
        onChange={alteraSenha}
      />

      <button onClick={enviar}>ok</button>
    </main>
  );
};

export default Login;
