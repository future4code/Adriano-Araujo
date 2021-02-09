import React from 'react'
import Playlist from './Componentes/Playlist'
import styled from 'styled-components'


const Titulo = styled.h1`
text-align:center;
`
class App extends React.Component {

  state={
    ativo:false
  }
  
  render(){
  return (
    <main>
      <Titulo>LabeFy</Titulo>
 <Playlist/>
    </main>
  )
  }

}

export default App;
