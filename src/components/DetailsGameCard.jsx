import "./DetailsGameCard.css";

export default function DetailsGameCard({ game, order_by }) {
let rank;
    if(game.rank > 999){
        rank="+1000";
    }else{
        rank = game.rank;
    }

    return (
        <div className="game-detail">
            <img id="game-image" src={game.image_url} alt={game.name + "_image"} />
            <div className='game-details-info'>
                <div className="game-detail-top-info">
                    <h2 className="game-name">{game.name}</h2>
                    <p className="game-rank">{rank} π </p>
                </div>
                <p className="game-price"> $ {game.price}</p>
                <div className='game-detail-middle-info'>
                    <div className="game-info">
                        <p> User Rating: </p>
                        <p> Playtime: </p>
                        <p> NΒΊ of Players:  </p>
                        <p> Year Published: </p>
                        <p> Minimum Age: </p>
                    </div>
                    <div className="game-info value">
                        <p> β­ {game.average_user_rating.toFixed(2)}  </p>
                        <p> β {game.min_playtime}-{game.max_playtime}  </p>
                        <p> π₯ {game.min_players}-{game.max_players}  </p>
                        <p> π {game.year_published}  </p>
                        <p> πΆπ» {game.min_age} </p>
                    </div>
                </div>
                <a className="game-detail-bottom-info" href={game.official_url} target="_blank"> Official Website</a>
            </div>
            <div dangerouslySetInnerHTML={{ __html: game.description }} className='game-description'></div>
            <div className='game-people'>
                <div className='publisher'>
                    β Primary Publisher: <a href={game.primary_publisher.url}>{game.primary_publisher.name}</a>
                </div>
                <div className='designer'>
                    β Primary Designer: <a href={game.primary_designer.url}>{game.primary_designer.name}</a>
                </div>
                <div className='artists'>
                    β Artists:  <ul>{game.artists.map((artist) => (<li>{artist}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}