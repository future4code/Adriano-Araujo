import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import useEntradaGeral from "../../hooks/useEntradaGeral";

import { voltar } from "../../rotas/CaminhosPaginas";

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
    <main>
      <h1>Criar de viagens </h1>

      <form onSubmit={submeter}>
        <p>Nome</p>
        <input onChange={alteraNome} name={"nome"} value={nome} />
        <p>planeta</p>
        <input
          onChange={alteraPlaneta}
          name={"planeta"}
          value={planeta}
        />
        <p>data</p>
        <input
          onChange={alteraData}
          name={"data"}
          value={data}
        />
        <p>descrição</p>
        <input
          onChange={alteraDescricao}
          name={"descrição"}
          value={descricao}
        />
        <p>Duração em dias</p>
        <input
          label={"Duração em dias"}
          onChange={alteraDuracao}
          name={"duracao"}
          value={duracao}
        />
      </form>
      <button type={"submit"} onClick={criarViagem}>
        Criar
      </button>

      <button type={"button"} onClick={() => voltar(history)}>
        voltar
      </button>
    </main>
  );
};

export default Viagens;
