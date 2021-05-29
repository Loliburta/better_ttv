import { Link } from "react-router-dom";
interface Props {
  id: string;
  name: string;
  box_art_url: string;
}
export const TopGame: React.FC<Props> = ({ id, name, box_art_url }) => {
  const url = box_art_url.replace("{width}", "200").replace("{height}", "300");
  return (
    <div className="topGames__game">
      <div>{id}</div>
      <Link to={`better_ttv/StreamersForGame/${name}/${id}`}>
        <img
          src={url}
          loading="lazy"
          alt="game"
          className="topGames__game__img"
        />
      </Link>
      <div className="topGames__game__name">{name}</div>
    </div>
  );
};
