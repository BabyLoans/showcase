import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/css/showcase.css";

import Index from "views/Index.js";
import Market from "views/Market.js";
import Team from "views/Team.js";

ReactDOM.render(
  <BrowserRouter>
  
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route exact path="/market" render={(props) => <Market {...props} />} />
      <Route exact path="/team" render={(props) => <Team {...props} />} />
    </Switch>
    <Redirect from="/" to="/" />
  </BrowserRouter>,
  document.getElementById("root")
);
