import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicial from "../paginas/Inicial";

import InicialPublica from "../paginas/publicas/InicioPublica";
import ListaViagens from "../paginas/publicas/ListaViagens";
import Formulario from "../paginas/publicas/Formulario";

import Login from "../paginas/privadas/Login";
import InicialPrivada from "../paginas/privadas/InicialPrivada";
import Administrar from "../paginas/privadas/Administrar";
import Viagens from "../paginas/privadas/Viagens";

import Cabecalho from "../Componente/Cabecalho";

function Router() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <Switch>
        <Route exact path="/">
          <Inicial />
        </Route>

        <Route exact path="/inicio-publico">
          <InicialPublica />
        </Route>

        <Route exact path="/lista-de-viagens">
          <ListaViagens />
        </Route>

        <Route exact path="/formulario">
          <Formulario />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/inicio-privado">
          <InicialPrivada />
        </Route>

        <Route exact path="/administrar">
          <Administrar />
        </Route>

        <Route exact path="/viagens-adm">
          <Viagens />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
