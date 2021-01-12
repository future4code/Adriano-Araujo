import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';


class Etapa1 extends React.Component {
    render() {


        return (
            <main>

                <h3>ETAPA 1 - DADOS GERAIS</h3>

                <PerguntaAberta pergunta={'1. Qual seu nome?'} />
                <PerguntaAberta pergunta={'2. Qual sua idade?'} />
                <PerguntaAberta pergunta={'3. Qual seu e-mail?'} />

                <PerguntaFechada pergunta={'4. Qual sua escolaridade?'}
                    opcao1={'Ensino médio incompleto'}
                    opcao2={'Ensino médio completo'}
                    opcao3={'Ensino superior incompleto'}
                    opcao4={'Ensino superior completo'}
                />

            </main>
        );
    }
}

export default Etapa1;
