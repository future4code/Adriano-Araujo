import React from 'react';
import approved from '../img/austinApproved.jpg';

class Final extends React.Component {
    render() {
      
      
      return (
          <main>

             <h3>O Formulário Acabou!</h3> 

             <p>Obrigado por participar! Entraremos em contato</p>
             <img  src={approved} alt="Austin Power aprova!"/>

            
          </main>
      );

    }
}
  
export default Final;