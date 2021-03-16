import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { voltar } from "../../rotas/CaminhosPaginas";
import { Button } from "@material-ui/core";

import {
  Container,
  Titulo,
  ContainerViagens,
  ViagemCard,
} from "../EstilosGerais";

const Administrar = () => {
  const [viagem, setViagem] = useState({});
  const [candidaturas, setCandidaturas] = useState([]);
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    pegaDetalhes();
  }, []);

  const pegaDetalhes = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trip/${id}`,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((resposta) => {
        setViagem(resposta.data.trip);
        setCandidaturas(resposta.data.trip.candidates);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  let candidatos = candidaturas.map((cada) => {
    return (
      <ViagemCard>
        <h1>{cada.name}</h1>
        <h3>Idade:{cada.age}</h3>
        <h3>Profissão:{cada.profession}</h3>
        {/* <p>{cada.applicationText}</p> */}
      </ViagemCard>
    );
  });
  return (
    <Container>
      <Titulo>Detalhes</Titulo>

      <ContainerViagens>{candidatos}</ContainerViagens>

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

export default Administrar;
