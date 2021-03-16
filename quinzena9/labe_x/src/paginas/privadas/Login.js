import React, { useEffect } from "react";
import axios from "axios";
import useEntradaGeral from "../../hooks/useEntradaGeral";
import { useHistory } from "react-router-dom";
import { inicialPrivada } from "../../rotas/CaminhosPaginas";
import { Container, Titulo, ContainerFormulario } from "../EstilosGerais";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Entrada = styled.input`
  margin: 0.5rem;
`;

const Login = () => {
  const [email, alteraEmail] = useEntradaGeral("");
  const [senha, alteraSenha] = useEntradaGeral("");
  const history = useHistory();

  const enviar = () => {
    const body = {
      email: email,
      password: senha,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/login",
        body
      )
      .then((resposta) => {
        localStorage.setItem("token", resposta.data.token);
        inicialPrivada(history);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      inicialPrivada(history);
    }
  }, [history]);

  return (
    <Container>
      <Titulo> Login </Titulo>

      <ContainerFormulario>
        <Entrada placeholder={"usuario"} value={email} onChange={alteraEmail} />
        <Entrada
          placeholder={"senha"}
          type={"password"}
          value={senha}
          onChange={alteraSenha}
        />
      </ContainerFormulario>
      <Button color="primary" variant="outlined" onClick={enviar}>
        ok
      </Button>
    </Container>
  );
};

export default Login;
