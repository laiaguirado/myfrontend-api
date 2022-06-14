import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './MainPage.css'
import Loading from "../components/Loading";
import GameCard from '../components/GameCard';

function MainPage() {
    const [gamesRankingList, setGamesRankingList] = useState({ games: [] });
    const [gamesRatingList, setGamesRatingList] = useState({ games: [] });
    const [gamesTrendingList, setGamesTrendingList] = useState({ games: [] });

    const fetchDataByRank = async () => {
        const result = await axios('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV&limit=10&order_by=rank');
        setGamesRankingList(result.data);
    };

    const fetchDataByRating = async () => {
        const result = await axios('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV&limit=10&order_by=average_user_rating');
        setGamesRatingList(result.data);
    };

    const fetchDataByTrending = async () => {
        const result = await axios('https://api.boardgameatlas.com/api/search?client_id=JLBr5npPhV&limit=10&order_by=trending');
        setGamesTrendingList(result.data);
    };


    useEffect(() => {
        fetchDataByRank()
        fetchDataByRating()
        fetchDataByTrending()
    }, []);

    const navigate = useNavigate();

    if (gamesRankingList.games.length === 0 || gamesRatingList.games.length === 0 || gamesTrendingList.games.length === 0) {
        return <Loading />;
    }

    return (
        <div className='main-page'>
            <div className='main-top-info'>
                <h1>Board Games</h1>
                <h3>These are the most popular board games widely loved by the community in terms of consistency in game page visits,
                    number of ratings, mentions, and other criteria.</h3>
            </div>
            <div className='games-orderby'>
                <div className='gamesRankingList'>
                    <div className='game-title' onClick={() => navigate('ranking', { replace: false })}>
                        <h2 className='title-seccion'>Games order by Ranking:</h2>
                    </div>
                    <div className='scroll_horizontal'>
                        <div className='example-games'>
                            {gamesRankingList.games.map((game) => (
                                <GameCard
                                    key={game.id}
                                    game={game}
                                    order_by={"ranking"}
                                    onClick={() => navigate(`/game/${game.id}`, { replace: false })}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='gamesRatingList'>
                    <div className='game-title' onClick={() => navigate('rating', { replace: false })}>
                        <h2 className='title-seccion'>Games order by Rating:</h2>
                    </div>
                    <div className='scroll_horizontal'>
                        <div className='example-games'>
                            {gamesRatingList.games.map((game) => (
                                <GameCard
                                    key={game.id}
                                    game={game}
                                    order_by={"rating"}
                                    onClick={() => navigate(`/game/${game.id}`, { replace: false })}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='gamesTrendingList'>
                    <div className='game-title' onClick={() => navigate('trending', { replace: false })}>
                        <h2 className='title-seccion'>Games order by Trending:</h2>
                    </div>
                    <div className='scroll_horizontal'>
                        <div className='example-games'>
                            {gamesTrendingList.games.map((game) => (
                                <GameCard
                                    key={game.id}
                                    game={game}
                                    order_by={"trending"}
                                    onClick={() => navigate(`/game/${game.id}`, { replace: false })}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage