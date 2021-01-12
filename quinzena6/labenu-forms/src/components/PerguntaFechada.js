
import React from 'react';


class PerguntaFechada extends React.Component {
    render() {

      return  (
             <div>
               <p>{this.props.pergunta}</p>
                 <select value={this.props.opcao}>
                     <option value="">{this.props.opcao1}</option>
                     <option value="">{this.props.opcao2}</option>
                     <option value="">{this.props.opcao3}</option>
                     <option value="">{this.props.opcao4}</option>
                 </select>
             </div>
      );
    }
  }

  export default PerguntaFechada;