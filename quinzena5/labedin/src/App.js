import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars2.githubusercontent.com/u/60116988?s=460&u=cc35ac6add51ea525ddcdbe5ce5ea06046974edc&v=4" 
          nome="Adriano P. de Araujo" 
          descricao="Olá meu nome é Adriano, sou estudante de Desenvolvimento Front End na Labenu ! E curto criar coisas que sejam funcionais e bonitas!"     
          />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif" 
          nome="Labenu" 
          descricao="Estudando desenvolvimento Front End com React!❤️" 
        />
        
        <CardGrande 
          imagem="https://i.pinimg.com/originals/ec/2e/12/ec2e12d00950de68ec65dba377664f0f.png" 
          nome="Via Mia" 
          descricao="Auxiliando na criação de uma experiência no ambiente de vendas" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          endereco="https://www.facebook.com/"
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          endereco="https://twitter.com/home"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
          
        />        
      </div>
    </div>
  );
}

export default App;
