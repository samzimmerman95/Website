import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import AdventureTitles from "./adventureTitles";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Sugarloaf from "./stories/2016Sugarloaf";

export default function AdventuresPage() {
  let { path } = useRouteMatch();
  return (
    <div className="container-fluid">
      <NavBar />
      <Switch>
        <Route exact path={path}>
          {AdventureTitles()}
        </Route>
        <Route path={`${path}/2016/stvincent`}></Route>
        <Route path={`${path}/2016/sugarloaf`}>
          <Sugarloaf />
        </Route>
        <Route path={`${path}/2017/yellowstone`}></Route>
        <Route path={`${path}/2017/woodisland`}></Route>
        <Route path={`${path}/2018/sugarloaf`}></Route>
        <Route path={`${path}/2018/malibu`}></Route>
        <Route path={`${path}/2018/cabotcliffs`}></Route>
        <Route path={`${path}/2018/boatshow`}></Route>
        <Route path={`${path}/2019/northberwick`}></Route>
        <Route path={`${path}/2019/stockholm`}></Route>
        <Route path={`${path}/2019/london`}></Route>
        <Route path={`${path}/2019/standrews`}></Route>
        <Route path={`${path}/2019/malaga`}></Route>
        <Route path={`${path}/2019/cinqueterre`}></Route>
        <Route path={`${path}/2019/pisa`}></Route>
        <Route path={`${path}/2019/isleofskye`}></Route>
        <Route path={`${path}/2019/mammoth`}></Route>
        <Route path={`${path}/2020/alberta`}></Route>
        <Route path={`${path}/2020/mtwashington`}></Route>
        <Route path={`${path}/2020/kancamagus`}></Route>
        <Route path={`${path}/2020/crosscountry`}></Route>
        <Route path={`${path}/2020/brycecanyon`}></Route>
        <Route path={`${path}/2020/zion`}></Route>
        <Route path={`${path}/2020/grandcanyon`}></Route>
        <Route path={`${path}/2020/sunsetcliffs`}></Route>
        <Route path={`${path}/2020/mammothlakes`}></Route>
        <Route path={`${path}/2020/torreypines`}></Route>
        <Route path={`${path}/2020/mammoth`}></Route>
      </Switch>
      <Footer />
    </div>
  );
}
