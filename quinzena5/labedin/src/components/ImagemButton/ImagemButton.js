import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <a href={props.endereco} className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
            
        </a>

    )
}

export default ImagemButton;