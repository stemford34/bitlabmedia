import React from "react";
import { Route, Switch } from "react-router-dom";

import { Main, Stats, User } from "./pages";

import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/user/:id" component={User} />
        {/*<Route exact path="/startgame" component={StartGame} />
        <Route exact path="/match/:match_id" component={Match} /> */}
      </Switch>
    </div>
  );
}

export default App;
