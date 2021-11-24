import React from "react";
import { useNavigate } from "react-router";
import './Game.css';


function Games ({...game}) {
  const navigate = useNavigate();
  const handleClickGameDetails = () => {
    console.log(game.id, game.name);
    navigate(`/games/${game.id}` );
  }

  
  return (
    <>
    <div key={game.id} className='container__game'>
      <img src={game.background_image} alt='{name}' className = 'game-img'/>
      <p>Title: {game.name}</p>
      <p>{game.rating}</p>
      <p>{game.released}</p>
        <button onClick={handleClickGameDetails}>
        <p>Want to know more?</p>
        </button>
    </div>
    </>
  )
}

export default Games;