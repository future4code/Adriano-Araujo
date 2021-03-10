import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"
import { voltar } from "../../rotas/CaminhosPaginas";
import { useHistory } from "react-router-dom";


const Card = styled.section`
border: 1px solid black;
width:450px;
`

const ListaViagens = () => {
  const [viagens, setViagens] = useState([]);
  const history = useHistory();

  useEffect(()=>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trips').then(resposta =>{
      setViagens(resposta.data.trips)
    })
  }, [])

  let listaViagens = viagens.map((planeta)=>{
    return (
      <Card>
        <p>{planeta.planet}</p>
        <p>{planeta.name}</p>
        <p>{planeta.description}</p>
      </Card>

    )
  })

  return (
    <main>
      <h1>Viagens :P</h1>
      <button onClick={() => voltar(history)}>voltar</button>

      <section>{listaViagens}</section>
     
    


   
    </main>
  );
};

export default ListaViagens;
