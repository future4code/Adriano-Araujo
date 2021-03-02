import React, { useState, useEffect } from "react";
import axios from "axios";
import { AfinidadesContainer, Lista, IconeNinguem } from "./estiloCurtidos";
import IconeNinguemNaLista from "@material-ui/icons/SentimentVeryDissatisfied";

const Curtidos = () => {
  const [afinidades, setAfinidades] = useState([]);

  useEffect(() => {
    meusCurtidos();
  }, []);

  const meusCurtidos = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/araujo-muyembe/matches"
      )
      .then((resposta) => {
        setAfinidades(resposta.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Lista>
      {afinidades.length == 0 ? (
        <IconeNinguem>
          <IconeNinguemNaLista style={{ color: "#48a498", fontSize: 120 }} />
          <h3>Por que ser tão exiginte?</h3>
        </IconeNinguem>
      ) : (
        <>
          {afinidades.map((afins) => {
            return (
              <AfinidadesContainer key={afins.id}>
                <img src={afins.photo} alt={"foto de usuários"} />
                <p>{afins.name}</p>
              </AfinidadesContainer>
            );
          })}
        </>
      )}
    </Lista>
  );
};

export default Curtidos;
