import React, { useState, useEffect } from "react";
import { voltar } from "../../rotas/CaminhosPaginas";
import useEntradaGeral from "../../hooks/useEntradaGeral";
import { useHistory } from "react-router-dom";
import { Container, Titulo, ContainerFormulario } from "../EstilosGerais";
import { Button } from "@material-ui/core";

import axios from "axios";

const Formulario = () => {
  const [nome, alteraNome] = useEntradaGeral("");
  const [idade, alteraIdade] = useEntradaGeral("");
  const [texto, alteraTexto] = useEntradaGeral("");
  const [profissao, alteraProfissao] = useEntradaGeral("");
  const [paisUsuario, alteraPaisUsuario] = useEntradaGeral("");
  const [selecionarViagem, setSelecionarViagem] = useEntradaGeral("");
  const [viagens, setViagens] = useState([]);
  const [pais, setPais] = useState([]);

  const history = useHistory();

  const paises = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((resposta) => {
      setPais(resposta.data);
    });
  };

  const pegaViagem = () => {
    const body = {
      name: nome,
      age: idade,
      applicationText: texto,
      profession: profissao,
      country: pais,
    };
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trips",
        body
      )
      .then((resposta) => {
        setViagens(resposta.data.trips);
      });
  };
  useEffect(() => {
    paises();
  }, [pais]);

  useEffect(() => {
    pegaViagem();
  }, [viagens]);

  const aplicarViagem = (evento) => {
    evento.preventDefault();

    const body = {
      name: nome,
      age: idade,
      applicationText: texto,
      profession: profissao,
      country: pais,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trips/${viagens.id}/apply`,
        body
      )
      .then(() => {
        alert("Candidatura feita com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submeter = (evento) => {
    evento.preventDefault(evento);
  };

  return (
    <Container>
      <Titulo>Candidate-se!</Titulo>

    <ContainerFormulario onSubmit={submeter}>

      <label>Nome:</label>
      <input
          name={"nome"}
          value={nome}
          type={"text"}
          onChange={alteraNome}
          pattern={"[a-zA-ZsÀ-ú ]{3,}"}
          required
        />

      <label>Idade:</label>
      <input
          name={"idade"}
          value={idade}
          type={"number"}
          onChange={alteraIdade}
          min="18"
          required
        />

      <label>Texto de aplicação:</label>
      <input
          name={"texto"}
          value={texto}
          type={"text"}
          pattern={"[a-zA-ZsÀ-ú ]{30,}"}
          onChange={alteraTexto}
          required
        />

      <label>Profissão:</label>
      <input
          name={"profissao"}
          value={profissao}
          type={"text"}
          pattern={"[a-zA-ZsÀ-ú ]{10,}"}
          onChange={alteraProfissao}
          required
        />

      <label>País:</label>
      <select value={pais} onChange={alteraPaisUsuario}>
          {pais.map((lista) => {
            return <option> {lista.name} </option>;
          })}
        </select>

      <label>Viagens:</label>
      <select
          name="viagem"
          value={selecionarViagem}
          onChange={setSelecionarViagem}
        >
          {viagens.map((viagem) => {
            return <option value={viagem.id}> {viagem.name} </option>;
          })}
        </select>

      </ContainerFormulario>
     <br/>
      <Button color="primary" variant="outlined" type={"submit"} onClick={aplicarViagem}>
        Enviar
      </Button>
      <br />

      <Button color="secondary" type={"button"} onClick={() => voltar(history)}>
        voltar
      </Button>
    </Container>
  );
};

export default Formulario;
