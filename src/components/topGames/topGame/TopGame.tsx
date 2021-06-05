import { Link } from "react-router-dom";
interface Props {
  id: string;
  name: string;
  box_art_url: string;
}
export const TopGame: React.FC<Props> = ({ id, name, box_art_url }) => {
  return (
    <div className="topGames__game">
      <Link to={`${process.env.PUBLIC_URL}/StreamersForGame/${name}/${id}`}>
        <img
          src={box_art_url}
          loading="lazy"
          alt="game"
          className="topGames__game__img"
        />
      </Link>
      <div className="topGames__game__name">
        <Link to={`${process.env.PUBLIC_URL}/StreamersForGame/${name}/${id}`}>
          <p className="topGames__game__name__text">{name}</p>
        </Link>
      </div>
    </div>
  );
};
