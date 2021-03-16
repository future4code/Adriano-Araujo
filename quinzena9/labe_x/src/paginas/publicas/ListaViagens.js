import React, { useState, useEffect } from "react";
import axios from "axios";
import { voltar } from "../../rotas/CaminhosPaginas";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  Container,
  Titulo,
  ContainerViagens,
  ViagemCard,
} from "../EstilosGerais";

const ListaViagens = () => {
  const [viagens, setViagens] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trips"
      )
      .then((resposta) => {
        setViagens(resposta.data.trips);
      });
  }, []);

  let listaViagens = viagens.map((planeta) => {
    return (
      <ViagemCard>
        <h1>{planeta.planet}</h1>
        <h3>{planeta.name}</h3>
        <p>{planeta.description}</p>
      </ViagemCard>
    );
  });

  return (
    <Container>
      <Titulo>Viagens</Titulo>

      <ContainerViagens>{listaViagens}</ContainerViagens>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => voltar(history)}
      >
        voltar
      </Button>
    </Container>
  );
};

export default ListaViagens;
