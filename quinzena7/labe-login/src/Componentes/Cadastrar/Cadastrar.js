import React from "react";
import axios from "axios";

import {
  Container,
  Cadastro,
  UsuariosContainer,
  Lista,
  BotaoDeletar,
  BotaoRetornar,
} from "../EstiloCadastro";

class Cadastrar extends React.Component {
  state = {
    lista: [],
    nomeUsuario: "",
    emailUsuario: "",
    ativo: true,
  };

  onChangeNomeUsuraio = (evento) => {
    this.setState({ nomeUsuario: evento.target.value });
  };
  onChangeEmailUsuario = (evento) => {
    this.setState({ emailUsuario: evento.target.value });
  };

  criaUsuario = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      )
      .then(() => {
        alert("Cadastro feito com sucesso!");
        this.setState({ nomeUsuario: "", emailUsuario: "" });
      })
      .catch((error) => {
        alert("Usuário não criado :( ");
      });
  };

  usuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      )
      .then((user) => this.setState({ lista: user.data, ativo: false }))
      .catch(() => alert("ok"));
  };

  deletaUsuario = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "araujo-muyembe",
          },
        }
      )
      .then(() => {
        alert("Usuário deletado!");
        this.usuarios();
      })
      .catch((erro) => {
        alert(erro.message);
      });
  };

  retorna = () => {
    this.setState({ ativo: true });
  };

  render() {
    let listaCadastrados = this.state.lista.map((user) => {
      return (
        <Lista key={user.id}>
          {user.name}
          <BotaoDeletar onClick={() => this.deletaUsuario(user.id)}>
            X
          </BotaoDeletar>
        </Lista>
      );
    });

    return (
      <Container>
        {this.state.ativo ? (
          <Cadastro>
            <p>Cadastro</p>
            <input
              value={this.state.nomeUsuario}
              onChange={this.onChangeNomeUsuraio}
            />
            <input
              value={this.state.nomeEmail}
              onChange={this.onChangeEmailUsuario}
            />

            <button onClick={this.criaUsuario}>criar</button>
            <button onClick={this.usuarios}>lista</button>
          </Cadastro>
        ) : (
          <section>
            <UsuariosContainer>{listaCadastrados}</UsuariosContainer>
            <BotaoRetornar onClick={this.retorna}>Retornar</BotaoRetornar>
          </section>
        )}
      </Container>
    );
  }
}

export default Cadastrar;
