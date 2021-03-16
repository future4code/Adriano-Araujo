import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
// import useEntradaGeral from "../../hooks/useEntradaGeral";

import { voltar } from "../../rotas/CaminhosPaginas";

const Administrar = () => {
  const [probacionistas, alteraProbacionistas] = useState({});
  const pathParams = useParams();
  const id = pathParams.id
  const history = useHistory();

  useEffect(() => {
    pegaDetalhes();
  });


  const pegaDetalhes = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/araujo-muyembe/trip/${id}`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((resposta) => {
        alteraProbacionistas(resposta.data.trip);

      })
      .catch((erro) => {
        console.log(erro);
      });
  };
 
  return (
    <main>
      <h1>Detalhes</h1>

      <div>
         

      </div>
      <div>
      
      </div>

      <button onClick={() => voltar(history)}>voltar</button>
    </main>
  );
};

export default Administrar;
