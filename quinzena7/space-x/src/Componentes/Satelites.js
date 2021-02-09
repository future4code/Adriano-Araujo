import React from "react";
import axios from "axios";
import estilos from '../EstiloGeral/App.css'
import Enterprise from '../assets/butonprise.jpg'


import {
  TelaSatelites,
  TamanhosSatelites,
  Sumario,
  BotoesContainer,
  TelaPrincipal,
  ImagemNave,
  ContainerSatelites,
  CorParagrafo,
  CardDescricao
  
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
        <main>
          <TamanhosSatelites src={item.flickr_images} alt={"satelites"} />
          <CardDescricao>
            <Sumario>
              <p key={item.id}>
                {item.name} - {item.type}
              </p>
            </Sumario>
            <CorParagrafo>{item.description}</CorParagrafo>
          </CardDescricao>
        </main>

      );
    });

    return (
      <TelaSatelites>
        <ContainerSatelites>{exibir}</ContainerSatelites>
        <ImagemNave onClick={this.pegarDragons} src={Enterprise} alt={'a'}/>
      </TelaSatelites>
    );
  }
}

export default Satelites;
