import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Games.css'
import Loading from "../components/Loading";
import GameCard from '../components/GameCard';

function GamesTrending() {
    const [gamesList, setGamesList] = useState({ games: [] });

    const navigate = useNavigate();
    const goMainPage = () => navigate("/");
    const goGamesRanking = () => navigate("/ranking");
    const goGamesRating = () => navigate("/rating");

    const fetchDataByTrending = async () => {
        const result = await axios('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV&limit=50&order_by=trending');
        setGamesList(result.data);
    };

    useEffect(() => {
        fetchDataByTrending()
    }, []);

    if (gamesList.games.length === 0) {
        return <Loading />;
    }

    return (
        <div className='games'>
            <div className='games-top-info'>
                <h1 id='title-games-page'>Top Trending Board Games</h1>
                <h4 id='subtitle-games-page'>These are the hottest board games that have jumped the most in number of
                    game page visits and mentions over the past week.</h4>
                <div className='buttons'>
                    <button className='button-order-by' onClick={goMainPage}> 🏠 Main Page </button>
                    <button className="button-order-by" onClick={goGamesRanking}> 🏆 Games order by ranking</button>
                    <button className="button-order-by" onClick={goGamesRating}> ⭐ Games order by rating</button>
                </div>
            </div>
            <div className='gamesList'>
                {gamesList.games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        order_by={"trending"}
                        onClick={() => navigate(`/game/${game.id}`, { replace: false })}
                    />
                ))}
            </div>
        </div>
    );
}

export default GamesTrending