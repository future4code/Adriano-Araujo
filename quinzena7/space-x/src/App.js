import React from "react";
import Satelites from "./Componentes/Satelites";
import imagemPrincipal from "./assets/backx.png";

import {
  TamanhoImagem,
  TelaPrincipal,
  BotoesContainer,
  PaginaEntrar
} from "./EstiloGeral/EstilosGerais";

class App extends React.Component {
  state = {
    ativo: false,
  };

  entrar = () => {
    this.setState({ ativo: true });
  };
  sair = () => {
    this.setState({ ativo: false });
  };

  render() {
    return (
      <TelaPrincipal>
        {this.state.ativo ? (
          <section>
            <Satelites />
            <BotoesContainer><button onClick={this.sair}>Sair</button></BotoesContainer>
          </section>
        ) : (
          <PaginaEntrar>

            <TamanhoImagem src={imagemPrincipal} alt={""} />
            <BotoesContainer>
              <button onClick={this.entrar}>Entrar</button>
            </BotoesContainer>
          </PaginaEntrar>
        )}
      </TelaPrincipal>
    );
  }
}

export default App;
