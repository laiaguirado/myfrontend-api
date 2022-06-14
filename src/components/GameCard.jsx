import "./GameCard.css";

export default function GameCard({ game, order_by, onClick }) {
  let orderby;
  if(order_by==="ranking"){
    orderby = <p>{game.rank} 🏆 </p>
  }
  else if(order_by==="rating"){
    orderby = <p>{game.average_user_rating.toFixed(2)} ⭐ </p>
  }
  else if(order_by==="trending"){
    orderby = <p>{game.trending_rank} 🔥 </p>
  }

  return (
    <div className="game-card" key={game.id} onClick={onClick}>
      <img className="game-image" src={game.image_url} alt={game.name + "_image"} />
      <div className="game-info">
        <p className="game-name"> {game.name} </p>
        <div className="game-general-info">
          <p className="game-price"> $ {game.price}</p>
          {orderby}
        </div>
        <div className="game-detail-info">
          <p> ⌚ {game.min_playtime}-{game.max_playtime} </p>
          <p> 👥 {game.min_players}-{game.max_players} </p>
          <p> 📅 {game.year_published}</p>
        </div>
      </div>
    </div>
  );
}