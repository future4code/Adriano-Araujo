import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    hsla(40, 63%, 85%, 1) 0%,
    hsla(22, 94%, 79%, 1) 100%
  );
`;
const Cadastro = styled.section`
  width: 12rem;
  height: 14rem;
  border-radius: 2%;
  background: white;
  box-shadow: -4px 11px 5px -1px rgba(0, 0, 0, 0.54);
`;

const UsuariosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 40vw;
  height: 40vh;
`;

const Lista = styled.p`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  background: white;
  padding: 0.5rem;
  height: 1rem;
  border-radius: 3%;
  box-shadow: -4px 11px 5px -1px rgba(0, 0, 0, 0.54);
`;

const BotaoDeletar = styled.button`
  background: white;
  border: none;
  margin-left: 1rem;

  &:hover {
    filter: invert(100%);
  }
`;

class Cadastrar extends React.Component {
  state = {
    lista: [],
    nomeUsuario: "",
    emailUsuario: "",
  };

  onChangeNomeUsuraio = (evento) => {
    this.setState({ nomeUsuario: evento.target.value });
  };
  onChangeEmailUsuario = (evento) => {
    this.setState({ emailUsuario: evento.target.value });
  };

  //MOSTRA

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
      .then((user) => this.setState({ lista: user.data }))
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

        <UsuariosContainer>{listaCadastrados}</UsuariosContainer>
      </Container>
    );
  }
}

export default Cadastrar;
