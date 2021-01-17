import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardEndereco from './components/CardEndereco/CardEndereco';
import Projetos from './components/Projetos/Projetos';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars2.githubusercontent.com/u/60116988?s=460&u=cc35ac6add51ea525ddcdbe5ce5ea06046974edc&v=4" 
          nome="Adriano P. de Araujo" 
          descricao="Olá meu nome é Adriano, sou estudante de Desenvolvimento Front End na Labenu ! 
          Minha mete é aprender a criar coisas que 
          sejam funcionais e bonitas!"     
          />

                
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <h2>Projetos</h2> 
      <div ClassName="projetos-container">
      
      <Projetos
          projetosLinks1="https://codepen.io/araujo6_6/pen/wvzMbZp"
          projetosImagem1="https://64.media.tumblr.com/ee8eb5e87c6ab088dd5929dc412b7cde/568d192530d7e258-53/s500x750/d2186256aa76ea58ea8ef46a6f70448dd20f949a.png"
          projetosLinks2="https://codepen.io/araujo6_6/pen/WNxVvpw"
          projetosImagem2="https://64.media.tumblr.com/997fe363954d4ad4c42c64b765fa7cfd/c38a8f03a6f0ef1c-a5/s540x810/f9150009432395d51958f554c035ae6cca8c3bb4.png"
          projetosLinks3="https://codepen.io/araujo6_6/pen/KKgzXMv"
          projetosImagem3="https://64.media.tumblr.com/68e6031b586dc41f52d73f424e844af0/1d20697cc16ab053-70/s400x600/0ca5f279f1600bbdc13db20e05826b1640de6f44.png"
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
        <h2>Entre em contato</h2>
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
         <ImagemButton 
          endereco="mailto:araujo_ir@yahoo.com"
          imagem="https://icons-for-free.com/iconfiles/png/512/email+gmail+mail+message+service+icon-1320183404410750774.png" 
          texto="E-mail" 
          />
         </div>

          <div className="page-section-container">
          <h2>Onde me encontrar</h2>    

          <CardEndereco
          imagemLugar="https://cdn.iconscout.com/icon/free/png-256/starbucks-226353.png"
          tituloLugar="Rio de Janeiro/Bahia"
        />        
    </div>
    </div>
  );
}

export default App;
