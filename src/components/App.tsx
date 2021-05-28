import { useState } from "react";
import { Navbar } from "./navbar/Navbar";
import { TopGames } from "./topGames/TopGames";
import { TopStreamers } from "./topStreamers/TopStreamers";
export const App = () => {
  const [visibleGames, setVisibleGames] = useState(true);
  const [,setVisiblePlayers] = useState(false);
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
      <Navbar />
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
