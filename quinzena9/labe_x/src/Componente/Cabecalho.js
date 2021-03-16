import React from "react";
import { Inicial } from "../rotas/CaminhosPaginas";
import { useHistory } from "react-router-dom";
import {CabecalhoGeral,TituloLogo} from "./CabecalhoEstilo"
import LogoX from "../img/labe-x-logo.png"

const Cabecalho = () => {
  const history = useHistory();

  return (
    <CabecalhoGeral>
      <TituloLogo src={LogoX} onClick={() => Inicial(history)}/>
    </CabecalhoGeral>
  );
};

export default Cabecalho;
