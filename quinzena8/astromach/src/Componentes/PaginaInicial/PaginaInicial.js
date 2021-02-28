import React, { useState, useEffect } from "react";
import axios from "axios";
import BotaoSimNao from "@material-ui/core/Fab";
import IconeCoracao from "@material-ui/icons/Favorite";
import IconeX from "@material-ui/icons/Close";
import {
  Perfil,
  Foto,
  Informacao,
  NomeIdade,
  ContainerBotoes,
} from "./estiloInicio";

const PaginaInicial = () => {
  const [listaPerfil, setListaPerfil] = useState([]);

  useEffect(() => {
    carregarPerfil();
  }, []);

  const carregarPerfil = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/araujo-muyembe/person"
      )
      .then((response) => {
        setListaPerfil(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const escolherPerfil = () => {
    const body = {
      id: listaPerfil.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/araujo-muyembe/choose-person",
        body
      )

      .catch((error) => {
        console.log(error);
      });
  };

  const curtir = () => {
    carregarPerfil();
    escolherPerfil();
  };

  return (
    <main>
      <Perfil>
        <Foto src={listaPerfil.photo} />

        <Informacao>
          <NomeIdade>
            {listaPerfil.name}, {listaPerfil.age}
          </NomeIdade>
          <p>{listaPerfil.bio}</p>
        </Informacao>
      </Perfil>

      <ContainerBotoes>
        <BotaoSimNao
          onClick={carregarPerfil}
          style={{ color: "white", background: "#48a498" }}
          aria-label="edit"
        >
          <IconeX />
        </BotaoSimNao>

        <BotaoSimNao
          onClick={curtir}
          style={{ color: "white", background: "#762d93" }}
          aria-label="edit"
        >
          <IconeCoracao />
        </BotaoSimNao>
      </ContainerBotoes>
    </main>
  );
};

export default PaginaInicial;
