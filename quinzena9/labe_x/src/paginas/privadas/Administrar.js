import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
// import useEntradaGeral from "../../hooks/useEntradaGeral";

import { voltar } from "../../rotas/CaminhosPaginas";

const Administrar = () => {
  const [viagem, setViagem] = useState({});
  const [candidaturas, setCandidaturas] = useState([])
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    pegaDetalhes();
  },[]);


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
        setViagem(resposta.data.trip)
        setCandidaturas(resposta.data.trip.candidates);


      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  return (
    <main>
      <h1>Detalhes</h1>

     
         
   <article>
     {candidaturas.map((cada)=>{
       return(<section>
         <p>{cada.name}</p>
         <p>{cada.age}</p>
         <p>{cada.profession}</p>
         <p>{cada.applicationText}</p>
       

       </section>)
     })}
     

     </article>

      
     

      <button onClick={() => voltar(history)}>voltar</button>
    </main>
  );
};

export default Administrar;
