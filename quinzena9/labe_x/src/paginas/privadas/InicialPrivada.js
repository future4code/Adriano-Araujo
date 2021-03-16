import React from "react";
import { useHistory } from "react-router-dom";
import { viagens, administrar } from "../../rotas/CaminhosPaginas";
import { Container, Titulo, Botoes } from "../EstilosGerais";
import { Button } from "@material-ui/core";

const InicialPrivada = () => {
  const history = useHistory();

  return (
    <Container>
      <Titulo>Bem Vindo!</Titulo>
      <h2>Aqui você pode:</h2>
      <Botoes>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => viagens(history)}
      >
        Criar Viagens
      </Button>
      <Button
        color="secondary"
        variant="outlined"
        onClick={() => administrar(history)}
      >
        Detalhes
      </Button>
      </Botoes>
    </Container>
  );
};

export default InicialPrivada;
