import { Navbar } from "./navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home } from "./home/Home";
import { StreamersForGame } from "./streamersForGame/StreamersForGame";
import { LiveStream } from "./liveStream/LiveStream";

export const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/better_ttv" />
          <Route path={["/better_ttv"]} exact>
            <Home />
          </Route>
          <Route
            path={[
              "/better_ttv/StreamersForGame/:GameName/:GameId",
              "/StreamersForGame/:GameName/:GameId",
            ]}
          >
            <StreamersForGame />
          </Route>
          <Route path={["/Streamer/:Name", "/better_ttv/Streamer/:Name"]}>
            <LiveStream />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
