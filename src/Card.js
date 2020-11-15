import React from 'react'
import "./card.css"
import cardImg from './card-img.jpg';

const Card = () => {
    return (
        <div class="card">
            <img class="card-img" src={cardImg} alt="Avatar" />
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}

export default Card;
