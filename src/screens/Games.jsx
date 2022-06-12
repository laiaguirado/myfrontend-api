import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Games.css'
import Loading from "../components/Loading";
import GameCard from '../components/GameCard';

function Games() {
    const [gamesList, setGamesList] = useState({ games: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV&limit=48&order_by=rank');
            setGamesList(result.data);
        };
        fetchData();
    }, []);
    const navigate = useNavigate();
    if (gamesList.games.length === 0) {
        return <Loading />;
    }
    return (
        <div className='games'>
            <h1>Popular Board Games</h1>
            <h4>These are the most popular board games widely loved by the community in terms of consistency in game page visits, 
                number of ratings, mentions, and other criteria.</h4>
            <div className='gameList'>
                {gamesList.games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        onClick={() => navigate(`/game/${game.id}`, { replace: false })}
                    />
                ))}
            </div>
        </div>
    );
}

export default Games