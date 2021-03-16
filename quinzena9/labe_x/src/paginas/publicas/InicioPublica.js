import React from "react";
import { useHistory } from "react-router-dom";
import { listaViagens, formulario } from "../../rotas/CaminhosPaginas";
import { Button } from "@material-ui/core";
import { Titulo, Container, Botoes } from "../EstilosGerais";

const InicialPublica = () => {
  const history = useHistory();

  return (
    <Container>
      <Titulo>Seja Bem-Vindo</Titulo>
      <h2>Por aqui você pode acessar as páginas</h2>

      <Botoes>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => listaViagens(history)}
        >
          Viagens
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => formulario(history)}
        >
          Formulario
        </Button>
      </Botoes>
    </Container>
  );
};

export default InicialPublica;
