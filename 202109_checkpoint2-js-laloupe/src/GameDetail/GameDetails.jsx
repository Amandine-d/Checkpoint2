import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import './GameDetails.css';

function GameDetails ({id}) {
  const params = useParams();
  const [gameInfos, setGameInfos] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(!id){
    axios.get(`http://wild-games.jsrover.wilders.dev/games/${params.id}`)
    .then(({data}) => {
      setGameInfos(data);
    })
    .catch((err) => console.error(err.message));
  } else {
    setGameInfos()
  }
  }, [params.id])
  console.log(gameInfos);
  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <button onClick={handleBack} className="btn">Go back</button>
      <div className="container">
        <div classname="container__game__detail">
            <h1>{gameInfos.name}</h1>
            <img src={gameInfos.background_image} alt={gameInfos.name} className="game__detail__img"/>
            <p>Ratings: { gameInfos.rating}/5</p>
            <p>Released in: { gameInfos.released}</p>
            <h3>Go and check on Google to see more details</h3>
            
        </div>
      </div>
    </div>
  )
}

export default GameDetails;