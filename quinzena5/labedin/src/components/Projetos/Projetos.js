import React from 'react';
import './Projetos.css'

function Projetos(props) {
    return (
        <div className="projetos-container">

        <article>
        <a href={props.projetosLinks1} target="_blank" className="projetos-links">
            <img src={ props.projetosImagem1 }/>
            <p>{ props.ProjetosTitulos }</p>
            
        </a>
        </article>
        <article>
        <a href={props.projetosLinks2} target="_blank" className="projetos-links">
            <img src={ props.projetosImagem2 }/>
            <p>{ props.ProjetosTitulos }</p>
            
        </a>
        </article>
        <article>
        <a href={props.projetosLinks3} target="_blank" className="projetos-links">
            <img src={ props.projetosImagem3 }/>
            <p>{ props.ProjetosTitulos }</p>
            
        </a>
        </article>
        </div>

    )
}

export default Projetos;