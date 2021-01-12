
import React from 'react';
import styled from 'styled-components'
import Etapa1 from '../src/components/Etapa1';
import Etapa2 from '../src/components/Etapa2';
import Etapa3 from '../src/components/Etapa3';
import Final from '../src/components/Final';

import './App.css';


class App extends React.Component {
  state = {
     etapa: 1
  }

  onClickProximaEtapa = () =>{
    this.setState({
      etapa: this.state.etapa + 1

    })
   }


   render() {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
         return <Etapa1 />
        case 2:
          return <Etapa2 />
        case 3:
          return <Etapa3 />
        case 4:
          return <Final />
        default:
          return "ERRO"  
      }
    };

    return (
      <main>
         {renderizaEtapa()}
         {this.state.etapa !== 4 && <button onClick={this.onClickProximaEtapa}>Proxima etapa</button>}
      </main>
    );
  }
}


export default App;


