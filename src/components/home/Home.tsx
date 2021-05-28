import { useState } from "react";
import { TopGames } from "../topGames/TopGames";
import { TopStreamers } from "../topStreamers/TopStreamers";

export const Home = () => {
  const [visibleGames, setVisibleGames] = useState(true);
  const [, setVisiblePlayers] = useState(false);
  const handleClickGames = () => {
    setVisiblePlayers(false);
    setVisibleGames(true);
  };
  const handleClickPlayers = () => {
    setVisibleGames(false);
    setVisiblePlayers(true);
  };
  return (
    <div>
      <div className="button">
        <div className="button__option" onClick={handleClickGames}>
          Kategorie
        </div>
        <div className="button__option" onClick={handleClickPlayers}>
          Kanały na żywo
        </div>
      </div>
      {visibleGames ? <TopGames /> : <TopStreamers />}
    </div>
  );
};
