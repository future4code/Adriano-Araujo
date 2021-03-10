import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../rotas/CaminhosPaginas";

const paginaProtegida = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
        login(history);
    }
  }, [history]);
};

export default paginaProtegida;
