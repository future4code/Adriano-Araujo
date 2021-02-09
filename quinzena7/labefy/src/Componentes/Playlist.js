import axios from "axios";
import React from "react";
import {
  Card,
  PaginaPlaylist,
  ContainerCardPlaylist,
  CardPlaylist,
  BotaoVoltar,
  BotaoVerPlaylist,
} from "../Estilos/Estilos";

class Playlist extends React.Component {
  state = {
    playlist: [],
    textoInputPlaylist: "",
    verEsconder: true,

    textoInputMusica: "",
    textoInputArtista: "",
    textoInputLink: "",

    listaMusicas: [],
  };

  onChangeTextoInputPlaylist = (evento) => {
    this.setState({ textoInputPlayist: evento.target.value });
  };
  onChangeTextoInputArtista = (evento) => {
    this.setState({ textoInputArtista: evento.target.value });
  };
  onChangeTextoInputMusica = (evento) => {
    this.setState({ textoInputMusica: evento.target.value });
  };
  onChangeTextoInputLink = (evento) => {
    this.setState({ textoInputLink: evento.target.value });
  };

  verPlaylist = async () => {
    try {
      const resposta = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      );

      this.setState({
        playlist: resposta.data.result.list,
        verEsconder: false,
      });
    } catch (erro) {
      console.log(erro.message);
    }
  };

  esconderPlaylist = () => {
    this.setState({ verEsconder: true });
  };

  adcionarPlaylist = async () => {
    const nomePlaylist = {
      name: this.state.textoInputPlaylist,
    };
    try {
      await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        nomePlaylist,
        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      );

      this.setState({ textoInputPlaylist: "" });
      alert("foiii");
    } catch (erro) {
      alert(erro.message);
    }
  };

  adcionarMusica = async (id) => {
    const musica = {
      name: this.state.textoInputMusica,
      artist: this.state.textoInputArtista,
      url: this.state.textoInputLink,
    };

    try {
      await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        musica,

        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      );
      this.setState({
        textoInputMusica: "",
        textoInputArtista: "",
        textoInputLink: "",
      });
      alert("musica adcionada");
    } catch (erro) {
      alert(erro.message);
    }
  };

  

  render() {
    const listaPlaylist = this.state.playlist.map((item) => {
      return (
        <CardPlaylist>
        <summary key={item.id}>{item.name}</summary>
               <input
                placeholder={"nome do artista"}
                value={this.state.textoInputArtista}
                onChange={this.onChangeTextoInputArtista}
              />
              <input
                placeholder={"nome da música"}
                value={this.state.textoInputMusica}
                onChange={this.onChangeTextoInputMusica}
              />
              <input
                placeholder={"link"}
                value={this.state.textoInputLink}
                onChange={this.onChangeTextoInputLink}
              />
              <button onClick={() => this.adcionarMusica()}>Adcionar</button>
              <button onClick={() => this.verMusica()}>VER</button>

            </CardPlaylist>
        
      );
    });

    return (
      <PaginaPlaylist>
        <Card>
          <input
            placeholder={"nome da playlist"}
            value={this.state.textoInputPlaylist}
            onChange={this.onChangeTextoInputPlaylist}
          />
          <button onClick={this.adcionarPlaylist}>add</button>
        </Card>

        {this.state.verEsconder ? (
          <BotaoVerPlaylist>
            {" "}
            <button onClick={this.verPlaylist}>Ver Playlist</button>
          </BotaoVerPlaylist>
        ) : (
          <ContainerCardPlaylist>
            {listaPlaylist}

           

            <BotaoVoltar>
              <button onClick={this.esconderPlaylist}>Voltar</button>
            </BotaoVoltar>
          </ContainerCardPlaylist>
        )}
      </PaginaPlaylist>
    );
  }
}

export default Playlist;
