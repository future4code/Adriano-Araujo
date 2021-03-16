import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useEntradaGeral from "../../hooks/useEntradaGeral";
import { voltar } from "../../rotas/CaminhosPaginas";
import { Container, Titulo, ContainerFormulario } from "../EstilosGerais";
import { Button } from "@material-ui/core";


const Viagens = () => {
  const history = useHistory();

  const [nome, alteraNome] = useEntradaGeral("");
  const [planeta, alteraPlaneta] = useEntradaGeral("");
  const [descricao, alteraDescricao] = useEntradaGeral("");
  const [duracao, alteraDuracao] = useEntradaGeral("");
  const [data, alteraData] = useEntradaGeral("");


  const criarViagem = () => {
    const body = {
      name: nome,
      planet: planeta,
      date:data,
      description: descricao,
      durationInDays: duracao,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trips",
        body,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((resposta) => {
        console.log(resposta.data);
        alert("viagem criada com sucesso \n Acesse a página de admnistração");
      });
  };

  const submeter = (evento) => {
    evento.preventDefault(evento);
  };

  return (
    <Container>
      <Titulo>Criar de viagens </Titulo>

      <ContainerFormulario onSubmit={submeter}>
        <label>Nome</label>
        <input onChange={alteraNome} name={"nome"} value={nome} />
        <label>planeta</label>
        <input
          onChange={alteraPlaneta}
          name={"planeta"}
          value={planeta}
        />
        <label>data</label>
        <input
          onChange={alteraData}
          name={"data"}
          value={data}
        />
        <label>descrição</label>
        <input
          onChange={alteraDescricao}
          name={"descrição"}
          value={descricao}
        />
        <label>Duração em dias</label>
        <input
          label={"Duração em dias"}
          onChange={alteraDuracao}
          name={"duracao"}
          value={duracao}
        />
      </ContainerFormulario>
      <br/>
      <Button color="primary" variant="outlined" type={"submit"} onClick={criarViagem}>
        Criar
      </Button>
      <br/>
      <Button color="secondary" type={"button"} onClick={() => voltar(history)}>
        voltar
      </Button>
    </Container>
  );
};

export default Viagens;
