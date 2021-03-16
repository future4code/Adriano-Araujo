import React from "react";
import { Inicial } from "../rotas/CaminhosPaginas";
import { useHistory } from "react-router-dom";
import {CabecalhoGeral,TituloLogo} from "./CabecalhoEstilo"
import Inicio from "../img/inicio.png"

const Cabecalho = () => {
  const history = useHistory();

  return (
    <CabecalhoGeral>
      <TituloLogo src={Inicio} onClick={() => Inicial(history)}/>
    </CabecalhoGeral>
  );
};

export default Cabecalho;
