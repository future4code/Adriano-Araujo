import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';


class Etapa3 extends React.Component {
    render() {
      
      
      return (
          <main>

             <h3>Etapa 3- Informações Gerais de Ensino</h3> 

             <PerguntaAberta pergunta={'1. Por que você não terminou um curso de graduação?'}/>

             <PerguntaFechada pergunta={'2. Você fez algum curso complementar?'}
                    opcao1={'Nenhum'}
                    opcao2={'Curso Técnico'}
                    opcao3={'Curso de Inglês'}
            />


          </main>
      );

                  
    }
}
  
export default Etapa3;