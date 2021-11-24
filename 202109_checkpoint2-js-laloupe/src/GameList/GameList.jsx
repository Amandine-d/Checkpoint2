import React, { useState,useEffect }from "react";
import axios from "axios";
import Games from "../Game/Game";

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
    <div>
    <button onClick={handleRating} type='button'>Show me the best games</button>
    {gameList
    .filter((good) => (goodRating ? good.rating > 4.5 : good))
    .map((game) => {
      return(
       <Games {...game} key={game.id}/>
      )
    })}
       
    </div>
  )
}

export default GameList;