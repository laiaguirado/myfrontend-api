import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './DetailsGame.css'
import Loading from "../components/Loading";
import GameCard from '../components/GameCard';

function DetailsGame() {
    const { gameid } = useParams();
    const [game, setGame] = useState({ games: [] });

    const fetchData = async () => {
        const result = await axios(`https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV&ids=${gameid}`);
        setGame(result.data);
    };

    useEffect(() => {
        fetchData();
    }, [gameid]);
    console.log(game)
    console.log(gameid)
    if (game.games.length ===0) {
        return <Loading />;
    }
    return (
        <div id="detail_game">
            <h1>Detail Game</h1>
            {game.games.map((game) => (
            <div id="game">
                    <img id="detail_image" src={game.image_url} alt={game.name + "_image"} />
                    <h2>{game.name}</h2>
                    <div dangerouslySetInnerHTML={{__html:game.description}}  className='description'></div>
            </div>
            ))}
        </div>
    );
}
export default DetailsGame