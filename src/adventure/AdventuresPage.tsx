import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import AdventureTitles from "./adventureTitles";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Grenadines from "./stories/2016Grenadines";
import Sugarloaf from "./stories/2016Sugarloaf";
import WoodIsland from "./stories/2017Wood";
import Yellowstone from "./stories/2017Yellowstone";
import Boatshow from "./stories/2018Boatshow";
import Cabot from "./stories/2018Cabot";
import Malibu from "./stories/2018Malibu";
import Sugarloaf2 from "./stories/2018Sugarloaf";
import CinqueTerre from "./stories/2019CinqueTerre";
import FairyGlen from "./stories/2019FairyGlen";
import Flodigarry from "./stories/2019Flodigarry";
import London from "./stories/2019London";
import Malaga from "./stories/2019Malaga";
import Mammoth from "./stories/2019Mammoth";
import NorthBerwick from "./stories/2019NorthBerwick";
import OldMan from "./stories/2019OldMan";
import Pisa from "./stories/2019Pisa";
import Quirang from "./stories/2019Quirang";
import Sligachan from "./stories/2019Sligachan";
import StAndrews from "./stories/2019StAndrews";
import Stockholm from "./stories/2019Stockholm";
import Alberta from "./stories/2020Alberta";
import BryceCanyon from "./stories/2020BryceCanyon";
import CrossCountry from "./stories/2020CrossCountry";
import GrandCanyon from "./stories/2020GrandCanyon";
import Kancamagus from "./stories/2020Kancamagus";
import Mammoth2 from "./stories/2020Mammoth";
import MammothLakes from "./stories/2020MammothLakes";
import MtWashington from "./stories/2020MtWashington";
import SunsetCliffs from "./stories/2020SunsetCliffs";
import TorreyPines from "./stories/2020TorreyPines";
import Zion from "./stories/2020Zion";

export default function AdventuresPage() {
  let { path } = useRouteMatch();
  return (
    <div className="container-fluid">
      <NavBar />
      <Switch>
        <Route exact path={path}>
          {AdventureTitles()}
        </Route>
        <Route path={`${path}/2016/stvincent`}>
          <Grenadines />
        </Route>
        <Route path={`${path}/2016/sugarloaf`}>
          <Sugarloaf />
        </Route>
        <Route path={`${path}/2017/yellowstone`}>
          <Yellowstone />
        </Route>
        <Route path={`${path}/2017/woodisland`}>
          <WoodIsland />
        </Route>
        <Route path={`${path}/2018/sugarloaf`}>
          <Sugarloaf2 />
        </Route>
        <Route path={`${path}/2018/malibu`}>
          <Malibu />
        </Route>
        <Route path={`${path}/2018/cabotcliffs`}>
          <Cabot />
        </Route>
        <Route path={`${path}/2018/boatshow`}>
          <Boatshow />
        </Route>
        <Route path={`${path}/2019/northberwick`}>
          <NorthBerwick />
        </Route>
        <Route path={`${path}/2019/stockholm`}>
          <Stockholm />
        </Route>
        <Route path={`${path}/2019/london`}>
          <London />
        </Route>
        <Route path={`${path}/2019/standrews`}>
          <StAndrews />
        </Route>
        <Route path={`${path}/2019/malaga`}>
          <Malaga />
        </Route>
        <Route path={`${path}/2019/cinqueterre`}>
          <CinqueTerre />
        </Route>
        <Route path={`${path}/2019/pisa`}>
          <Pisa />
        </Route>
        <Route path={`${path}/2019/isleofskye/sligachan`}>
          <Sligachan />
        </Route>
        <Route path={`${path}/2019/isleofskye/storr`}>
          <OldMan />
        </Route>
        <Route path={`${path}/2019/isleofskye/quirang`}>
          <Quirang />
        </Route>
        <Route path={`${path}/2019/isleofskye/flodigarry`}>
          <Flodigarry />
        </Route>
        <Route path={`${path}/2019/isleofskye/fairyglen`}>
          <FairyGlen />
        </Route>
        <Route path={`${path}/2019/mammoth`}>
          <Mammoth />
        </Route>
        <Route path={`${path}/2020/alberta`}>
          <Alberta />
        </Route>
        <Route path={`${path}/2020/mtwashington`}>
          <MtWashington />
        </Route>
        <Route path={`${path}/2020/kancamagus`}>
          <Kancamagus />
        </Route>
        <Route path={`${path}/2020/crosscountry`}>
          <CrossCountry />
        </Route>
        <Route path={`${path}/2020/brycecanyon`}>
          <BryceCanyon />
        </Route>
        <Route path={`${path}/2020/zion`}>
          <Zion />
        </Route>
        <Route path={`${path}/2020/grandcanyon`}>
          <GrandCanyon />
        </Route>
        <Route path={`${path}/2020/sunsetcliffs`}>
          <SunsetCliffs />
        </Route>
        <Route path={`${path}/2020/mammothlakes`}>
          <MammothLakes />
        </Route>
        <Route path={`${path}/2020/torreypines`}>
          <TorreyPines />
        </Route>
        <Route path={`${path}/2020/mammoth`}>
          <Mammoth2 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
