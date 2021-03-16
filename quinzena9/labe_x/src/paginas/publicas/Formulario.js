import React, { useState, useEffect } from "react";
import { voltar } from "../../rotas/CaminhosPaginas";
import useEntradaGeral from "../../hooks/useEntradaGeral";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Formulario = () => {
  const [nome, alteraNome] = useEntradaGeral("");
  const [idade, alteraIdade] = useEntradaGeral("");
  const [texto, alteraTexto] = useEntradaGeral("");
  const [profissao, alteraProfissao] = useEntradaGeral("");
  const [paisUsuario, alteraPaisUsuario] = useEntradaGeral("")
  const [selecionarViagem, setSelecionarViagem] = useEntradaGeral("");
  const [viagens, setViagens] = useState([]);
  const [pais, setPais] =  useState([])



  const history = useHistory();

  const paises = ()=>{
    axios.get("https://restcountries.eu/rest/v2/all").then((resposta)=>{
      setPais(resposta.data)
    })
  } 

  

  const pegaViagem = () => {
    const body = {
      name: nome,
      age: idade,
      applicationText: texto,
      profession: profissao,
      country: pais,
    };axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trips",
        body
      ).then((resposta)=>{
      setViagens(resposta.data.trips)
      })
    
  };
  useEffect(()=>{
    paises()
  },[pais])

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
       alert("Candidatura feita com sucesso!")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(pais)

  const submeter = (evento) => {
    evento.preventDefault(evento);
  };

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
        <select value={pais}  onChange={alteraPaisUsuario}>
        {pais.map((lista)=>{
          return <option> {lista.name} </option>
        })}
         </select>
       

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
      <button type={"submit"} onClick={aplicarViagem}>
        Enviar
      </button>

      <button type={"button"} onClick={() => voltar(history)}>
        voltar
      </button>
    </main>
  );
};

export default Formulario;
