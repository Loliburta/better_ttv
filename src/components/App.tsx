import { Navbar } from "./navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home/Home";
import { StreamersForGame } from "./streamersForGame/StreamersForGame";

export const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path={["/", "/better_ttv"]} exact>
            <Home />
          </Route>
          <Route path="/better_ttv/StreamersForGame/:GameName/:GameId">
            <StreamersForGame />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
