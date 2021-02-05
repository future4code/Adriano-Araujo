import React from "react";
import styled from "styled-components";

const TareDaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class ToDoList extends React.Component {
  state = {
    tarefas: [],
    inputValue: " ",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    if (localStorage.getItem("tarefas")) {
      this.setState({ tarefas: JSON.parse(localStorage.getItem("tarefas")) });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    let inputTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novoTarefaArray = [inputTarefa, ...this.state.tarefas];
    this.setState({ tarefas: novoTarefaArray });
  };

  selectTarefa = (id) => {
    const listaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaListaDeTarefas = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaListaDeTarefas;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: listaDeTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value,
    });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TareDaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TareDaList>
      </div>
    );
  }
}

export default ToDoList;
