
import React from 'react';


class PerguntaAberta extends React.Component {
    render() {

      return  (

        <div>
        <p>{this.props.pergunta}</p>
           <input type="text"/>
        </div>


      );
    }
  }

  export default PerguntaAberta;