import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Games.css'
import Loading from "../components/Loading";
import GameCard from '../components/GameCard';

function GamesRanking() {
    const [gamesList, setGamesList] = useState({ games: [] });

    const navigate = useNavigate();
    const goMainPage = ()=> navigate("/");
    const goGamesRating = ()=> navigate("/rating");
    const goGamesTrending = ()=> navigate("/trending");

    const fetchDataByRank = async () => {
        const result = await axios('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV&limit=50&order_by=rank');
        setGamesList(result.data);
    };

    useEffect(() => {
        fetchDataByRank()
    }, []);

    if (gamesList.games.length === 0) {
        return <Loading />;
    }

    return (
        <div className='games'>
            <div className='top-info'>
                <h1>Top Ranking Board Games</h1>
                <h4>These are the most popular board games widely loved by the community in terms of consistency in game page visits,
                    number of ratings, mentions, and other criteria.</h4>
                <div className='buttons'>
                </div>
            </div>
            <div className='buttons'>
                <button className='order_by' onClick={goMainPage}> 🏠 Main Page </button>
                <button className="order_by" onClick={goGamesRating}> ⭐ Games order by rating</button>
                <button className="order_by" onClick={goGamesTrending}> 🔥 Games order by trending</button>
            </div>
            <div className='gameList'>
                {gamesList.games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        order_by={"ranking"}
                        onClick={() => navigate(`/game/${game.id}`, { replace: false })}
                    />
                ))}
            </div>
        </div>
    );
}

export default GamesRanking