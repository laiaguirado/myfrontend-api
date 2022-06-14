import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Games.css'
import Loading from "../components/Loading";
import GameCard from '../components/GameCard';

function GamesRating() {
    const [gamesList, setGamesList] = useState({ games: [] });

    const navigate = useNavigate();
    const goMainPage = ()=> navigate("/");
    const goGamesRanking = ()=> navigate("/ranking");
    const goGamesTrending = ()=> navigate("/trending");

    const fetchDataByRating = async () => {
        const result = await axios('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV&limit=50&order_by=average_user_rating');
        setGamesList(result.data);
    };

    useEffect(() => {
        fetchDataByRating()
    }, []);


    if (gamesList.games.length === 0) {
        return <Loading />;
    }

    return (
        <div className='games'>
            <div className='top-info'>
                <h1>Popular Board Games</h1>
                <h4>These are the most popular board games widely loved by the community in terms of score.</h4>
                <div className='buttons'>
                </div>
            </div>
            <div className='buttons'>
                <button className='order_by' onClick={goMainPage}> 🏠 Main Page </button>
                <button className="order_by" onClick={goGamesRanking}> 🏆 Games order by ranking</button>
                <button className="order_by" onClick={goGamesTrending}> 🔥 Games order by trending</button>
            </div>
            <div className='gameList'>
                {gamesList.games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        order_by={"rating"}
                        onClick={() => navigate(`/game/${game.id}`, { replace: false })}
                    />
                ))}
            </div>
        </div>
    );
}

export default GamesRating