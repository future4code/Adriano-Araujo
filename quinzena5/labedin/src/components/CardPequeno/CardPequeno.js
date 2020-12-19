import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="small-container">
            <div>
                <h4>{ props.onde}</h4>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;