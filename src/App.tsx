import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import FeedPage from "./FeedPage";
import FullScreen from "./FullScreen";
import FullView from "./FullView";
import P5Page from "./P5Page";
import WeatherPage from "./Weather/WeatherPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/feed">
            <FeedPage />
          </Route>
          <Route exact path="/feed/fullScreen">
            <FullScreen />
          </Route>
          <Route exact path="/feed/fullView" component={FullView} />
          <Route exact path="/p5">
            <P5Page />
          </Route>
          <Route exact path="/weather">
            <WeatherPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
