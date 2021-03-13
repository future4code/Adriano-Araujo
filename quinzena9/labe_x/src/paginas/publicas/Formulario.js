import React, { useState, useEffect } from "react";
import { voltar } from "../../rotas/CaminhosPaginas";
import useEntradaGeral from "../../hooks/useEntradaGeral";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Formulario = () => {
  const [nome, alteraNome] = useEntradaGeral("");
  const [idade, alteraIdade] = useEntradaGeral("");
  const [texto, alteraTexto] = useEntradaGeral("");
  const [pais, alteraPais] = useEntradaGeral("");
  const [profissao, alteraProfissao] = useEntradaGeral("");

  const [selecionarViagem, setSelecionarViagem] = useEntradaGeral();
  const [viagens, setViagens] = useState([]);

  const history = useHistory();

  useEffect(() => {
    pegaViagem();
  }, []);

  const pegaViagem = () => {
    const body = {
      name: nome,
      age: idade,
      applicationText: texto,
      profession: profissao,
      country: pais
    };

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trips",
        body, ).then((resposta) => {
        setViagens(resposta.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const aplicarViagem = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trips/${selecionarViagem}/${selecionarViagem.id}/apply`,
      )
      .then((resposta) => {
        console.log(resposta.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submeter = (evento) => {
    evento.preventDefault(evento);
  };

  console.log(selecionarViagem)
  return (
    <main>
      <h1>Candidate-se!</h1>

      <form onSubmit={submeter}>
        <p>Nome:</p>
        <input
          name={"nome"}
          value={nome}
          type={"text"}
          onChange={alteraNome}
          pattern={"[a-zA-ZsÀ-ú ]{3,}"}
          required
        />

        <p>Idade:</p>
        <input
          name={"idade"}
          value={idade}
          type={"number"}
          onChange={alteraIdade}
          min="18"
          required
        />

        <p>Texto de aplicação:</p>
        <input
          name={"texto"}
          value={texto}
          type={"text"}
          pattern={"[a-zA-ZsÀ-ú ]{30,}"}
          onChange={alteraTexto}
          required
        />

        <p>Profissão:</p>
        <input
          name={"profissao"}
          value={profissao}
          type={"text"}
          pattern={"[a-zA-ZsÀ-ú ]{10,}"}
          onChange={alteraProfissao}
          required
        />

        <p>País:</p>
        <input value={pais} onChange={alteraPais} />

        <p>Viagens:</p>
        <select
          name="viagem"
          value={selecionarViagem}
          onChange={setSelecionarViagem}
        >
          {viagens.map((viagem) => {
            return <option value={viagem.id}> {viagem.name} </option>;
          })}
        </select>
      </form>
      <button type={"submit"} onClick={aplicarViagem}>Enviar</button>

      <button type={"button"} onClick={() => voltar(history)}>
        voltar
      </button>
    </main>
  );
};

export default Formulario;
