import React from "react";
import { useHistory } from "react-router-dom";
import { InicialPublica, login } from "../rotas/CaminhosPaginas";
import { Button } from "@material-ui/core";
import { Titulo, Container, Botoes } from "./EstilosGerais";

const Inicial = () => {
  const history = useHistory();

  return (
    <Container>
      <Titulo>LABE X</Titulo>

      <Botoes>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => login(history)}
        >
          adm
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => InicialPublica(history)}
        >
          area do usuário{" "}
        </Button>
      </Botoes>
    </Container>
  );
};

export default Inicial;
