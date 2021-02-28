import React, { useState } from "react";
import axios from "axios";

import PaginaInicial from "../PaginaInicial/PaginaInicial";
import Curtidos from "../Curtidos/Curtidos";
import Voltar from "@material-ui/icons/ExitToAppOutlined";

import {
  Container,
  Logo,
  Card,
  Menu,
  BotaoLimpar,
  BotaoCurtidos,
} from "./estiloInterface";
import logo from "../../img/logo.png";

const Interface = () => {
  const [perfil] = useState([]);
  const [botaoCurtidos, setBotaoCurtidos] = useState("Curtidos");
  const [paginaAtual, setPaginaAtual] = useState(true);

  const mudarPaginas = () => {
    setPaginaAtual(!paginaAtual);
    botaoCurtidos == "Curtidos"
      ? setBotaoCurtidos(<Voltar />)
      : setBotaoCurtidos("Curtidos");
  };

  const limpar = () => {
    const body = { id: perfil.id };
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/araujo-muyembe/clear",
        body
      )
      .then((response) => {
        console.log(response);
        alert("Curtidos apagados, segue a fila!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Card>
        <Menu>
          <BotaoLimpar onClick={() => limpar()}>Limpar</BotaoLimpar>
          <Logo src={logo} />
          <BotaoCurtidos onClick={mudarPaginas}>{botaoCurtidos}</BotaoCurtidos>
        </Menu>

        {paginaAtual ? <PaginaInicial /> : <Curtidos />}
      </Card>
    </Container>
  );
};

export default Interface;
