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
          <Redirect exact from="/" to={`${process.env.PUBLIC_URL}/`} />
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <Home />
          </Route>
          <Route
            path={`${process.env.PUBLIC_URL}/StreamersForGame/:GameName/:GameId`}
          >
            <StreamersForGame />
          </Route>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/redirect/:GameName/:GameId`}
            render={(props) => (
              <Redirect
                to={`${process.env.PUBLIC_URL}/StreamersForGame/${props.match.params.GameName}/${props.match.params.GameId}`}
              />
            )}
          />
          <Route path={`${process.env.PUBLIC_URL}/Streamer/:Name`}>
            <LiveStream />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
