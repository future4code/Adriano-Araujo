import React from 'react';
import './CardEndereco.css'

function CardEndereco(props) {
    return (
        <div className="endereco-container">
        <img src={ props.imagemLugar } />
        <div>
            <h4>{ props.tituloLugar }</h4>
        </div>
     </div>
    )
}

export default CardEndereco;