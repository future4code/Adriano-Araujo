
import React from 'react';
import styled from 'styled-components'
import Etapa1 from '../src/components/Etapa1';
import Etapa2 from '../src/components/Etapa2';
import Etapa3 from '../src/components/Etapa3';
import Final from '../src/components/Final';

import './App.css';



  const Container = styled.main `
   background: linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%);
   display:flex;
   justify-content:center;
   align-items:center;
   width:100vw;
   height:100vh;
  `

  const FormStyle = styled.section `
    border-radius:4%;
    width:310px;
    height:400px;
    background:white;
    box-shadow: -4px 14px 15px 0px rgba(0,0,0,0.72);

   `
   const ButtonStyle = styled.button `
   margin-top:10px;

  `


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
      <Container>
        <FormStyle>
         {renderizaEtapa()}
         {this.state.etapa !== 4 && <ButtonStyle onClick={this.onClickProximaEtapa}>Proxima etapa</ButtonStyle>}
        </FormStyle>
      </Container>
    );
  }
}


export default App;


