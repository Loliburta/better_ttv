import { useState } from "react";
import { Navbar } from "./navbar/Navbar";
import { TopGames } from "./topGames/TopGames";
import { TopStreamers } from "./topStreamers/TopStreamers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { StreamersForGame } from "./streamersForGame/StreamersForGame";

export const App = () => {
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
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/StreamersForGame/:GameName/:GameId">
            <StreamersForGame />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
