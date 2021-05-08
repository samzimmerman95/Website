import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import FeedPage from "./feed/FeedPage";
import AdventuresPage from "./adventure/AdventuresPage";
import FullView from "./FullView";
import P5Page from "./P5Page";
// import WeatherPage from "./Weather/WeatherPage";
import WeatherPageRF from "./Weather/WeatherPageRF";

function App() {
  return (
    <HashRouter basename="/">
      {/* <BrowserRouter basename="/"> */}
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/feed">
            <FeedPage />
          </Route>
          <Route path="/adventures">
            <AdventuresPage />
          </Route>
          <Route exact path="/about"></Route>
          <Route exact path="/feed/fullView" component={FullView} />
          <Route exact path="/p5">
            <P5Page />
          </Route>
          <Route exact path="/weather">
            <WeatherPageRF />
          </Route>
        </Switch>
      </div>
      {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;
