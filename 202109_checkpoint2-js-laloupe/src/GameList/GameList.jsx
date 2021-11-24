import React, { useState,useEffect }from "react";
import axios from "axios";
import Game from "../Game/Game";

function GameList () {
  const [gameList, setGameList] = useState([]);
  useEffect(() => {
    axios.get('http://wild-games.jsrover.wilders.dev/games')
    .then((response) => {
      setGameList(
        response.data.map((game) => ({...game, isFavourite: false}))
      )
    })
  }, [])
  console.log(gameList);
  const [goodRating, setGoodRating] = useState(false);
  const handleRating = () => setGoodRating(!goodRating);
  

  return (
    <div classname="container__game__list">
    <button onClick={handleRating} type='button' className="btn">Show me the best games</button>
    {gameList
    .filter((good) => (goodRating ? good.rating > 4.5 : good))
    .map((game) => {
      return(
       <Game {...game} key={game.id}/>
      )
    })}
       
    </div>
  )
}

export default GameList;