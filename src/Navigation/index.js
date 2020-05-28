import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Screens from "./../Containers" 
export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path="/MyCart">
          <Screens.MyCart />
        </Route>
        <Route path="/">
          <Screens.Home />
        </Route>
      </Switch>
    </Router>
  );
}
