import React from "react";
import axios from "axios";
import {
  TelaSatelites,
  TamanhosSatelites,
  Sumario,
  BotoesContainer,
  TelaPrincipal
} from "../EstiloGeral/EstilosGerais";

class Satelites extends React.Component {
  state = {
    emOrbita: [],
  };

  pegarDragons = async () => {
    try {
      const resposta = await axios.get("https://api.spacexdata.com/v4/dragons");
      console.log(resposta.data);

      this.setState({ emOrbita: resposta.data });
    } catch (erro) {
      alert(erro.message);
    }
  };

  render() {
    const exibir = this.state.emOrbita.map((item) => {
      return (
        <TelaSatelites>
          <TamanhosSatelites src={item.flickr_images} alt={"satelites"} />
          <details>
            <Sumario>
              <p key={item.id}>
                {item.name} - {item.type}
              </p>
            </Sumario>
            <p>{item.description}</p>
          </details>
        </TelaSatelites>
      );
    });

    return (
      <main>
        {exibir}

        <BotoesContainer><button onClick={this.pegarDragons}>AAA</button></BotoesContainer>
      </main>
    );
  }
}

export default Satelites;
