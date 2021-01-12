import React from 'react';
import PerguntaAberta from './PerguntaAberta';



class Etapa2 extends React.Component {
    render() {
      
      
      return (
          <main>


             <h3>Etapa 2- Informações do Ensino Superior</h3> 

             <PerguntaAberta pergunta={'1. Qual o curso?'} />
             <PerguntaAberta pergunta={'2. Qual a unidade de Ensino?'} />
                
          </main>
      );

                  
    }
}
  
export default Etapa2;
