import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../App.css';
import './Game.css';

function Game ({...game}) {
  const navigate = useNavigate();
  const handleClickGameDetails = () => {
    console.log(game.id, game.name);
    navigate(`/games/${game.id}` );
  }
  
  return (
    <div className="container">
    <div key={game.id} className='container__game'>
      <img src={game.background_image} alt='{name}' className = 'game__img'/>
      <p>{game.name}</p>
      <p>Rating:{ game.rating}</p>
      <p>Released in: { game.released}</p>
        <button onClick={handleClickGameDetails} className="btn">
        <p>Want to know more?</p>
        </button>
    </div>
    </div>
  )
}

export default Game;