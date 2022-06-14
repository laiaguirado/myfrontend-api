import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './DetailsGame.css'
import Loading from "../components/Loading";
import DetailsGameCard from '../components/DetailsGameCard';

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
    if (game.games.length === 0) {
        return <Loading />;
    }
    return (
        <div className='details-game-page'>
            <div id="details-game-card">
                {game.games.map((game) => (
                    <DetailsGameCard
                        key={game.id}
                        game={game}
                        order_by={""} />
                ))}
            </div>
        </div>
    );
}
export default DetailsGame