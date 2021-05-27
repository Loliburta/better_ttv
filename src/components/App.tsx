import { TopGames } from "./topGames/TopGames";
import { useState } from "react";
import { TopStreamers } from "./topStreamers/TopStreamers";
export const App = () => {
  const [visibleGames, setVisibleGames] = useState(true);
  const [visiblePlayers, setVisiblePlayers] = useState(false);
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
          Gry
        </div>
        <div className="button__option" onClick={handleClickPlayers}>
          Gracze
        </div>
      </div>
      {visibleGames ? <TopGames /> : <TopStreamers />}
    </div>
  );
};
