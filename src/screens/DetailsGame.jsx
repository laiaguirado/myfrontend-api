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
    if (game.games.length === 0) {
        return <Loading />;
    }
    return (
        <div className='page'>
            <div id="game-general-detail">
                {game.games.map((game) => (
                    <div id="game-info">
                        <img id="detail_image" src={game.image_url} alt={game.name + "_image"} />
                        <div className='game-detail-info'>
                            <div className="game-general-info">
                                <h2>{game.name}</h2>
                                <p>{game.rank} 🏆 </p>
                            </div>
                            <p className="game-price"> $ {game.price}</p>
                            <div className='game-detail'>
                                <div className="game-info name">
                                    <p> User Rating: </p>
                                    <p> Playtime: </p>
                                    <p> Nº of Players:  </p>
                                    <p> Year Published: </p>
                                    <p> Minimum Age: </p>
                                </div>
                                <div className="game-info value">
                                    <p> ⭐ {game.average_user_rating.toFixed(2)}  </p>
                                    <p> ⌚ {game.min_playtime}-{game.max_playtime}  </p>
                                    <p> 👥 {game.min_players}-{game.max_players}  </p>
                                    <p> 📅 {game.year_published}  </p>
                                    <p> 👶🏻 {game.min_age} </p>
                                </div>
                            </div>
                            <a href={game.official_url} target="_blank"> Official Website</a>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: game.description }} className='description'></div>
                        <div className='people'>
                            <div className='publisher'>
                            ● Primary Publisher: <a href={game.primary_publisher.url}>{game.primary_publisher.name}</a>
                            </div>
                            <div className='designer'>
                            ● Primary Designer: <a href={game.primary_designer.url}>{game.primary_designer.name}</a>
                            </div>
                            <div className='artists'>
                               
                            ● Artists:  <ul>{game.artists.map((artist)=>(<li>{artist}</li>))}
                            </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default DetailsGame