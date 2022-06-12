import "./GameCard.css";

export default function GameCard({ game, onClick }) {
  return (
    <div className="game-card" key={game.id} onClick={onClick}>
      <img src={game.image_url} alt={game.name + "_image"} />
      <div className="game-info">
        <p className="game-name"> {game.name} </p>
        <div className="game-general-info">
          <p className="game-price"> $ {game.price}</p>
          <p>{game.rank} 🏆 </p>
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