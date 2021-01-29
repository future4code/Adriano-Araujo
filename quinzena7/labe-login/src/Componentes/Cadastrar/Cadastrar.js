import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;

const Cadastro = styled.section`
  width: 12rem;
  height: 12rem;
  border-radius: 2%;
`;

const Lista = styled.p`
border-bottom:solid black 1px;
`



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

  // CRIA
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
      .catch((erro) => {
        console.log("Usuário não criado :( ");
      });
  };

  componentDidMount() {
    this.criaUsuario();
  }

  render() {
    let listaCadastrados = this.state.lista.map((user) => {
      return <Lista key={user.id}>{user.name}</Lista>;
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
         
         <div>{listaCadastrados}</div>
          
      </Container>
    );
  }
}

export default Cadastrar;
