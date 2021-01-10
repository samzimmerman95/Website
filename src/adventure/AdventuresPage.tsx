import React, { Component } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import AdventureTitles from "./adventureTitles";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function AdventuresPage() {
  let { path } = useRouteMatch();
  return (
    <div className="container">
      <Switch>
        <Route exact path={path}>
          <NavBar />
          {AdventureTitles()}
          <Footer />
        </Route>
        <Route path={`${path}/2020/mammoth`}>
          <h3>2020 Mammoth page</h3>
        </Route>
      </Switch>
    </div>
  );
}
