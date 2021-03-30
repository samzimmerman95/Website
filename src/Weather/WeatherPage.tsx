import React from "react";
import firebase from "../initFirebase";
import Chart from "./Chart";
import NavBar from "../NavBar";
import Footer from "../Footer";

type weatherState = {
  rawData: any;
  latest: { date: number; temps: string[] };
  timeSince: number;
};

type rawDataStructure = {
  date: number;
  temps: any;
};

export default class WeatherPage extends React.Component<{}, weatherState> {
  constructor(props: any) {
    super(props);
    this.state = { rawData: [], latest: { date: 0, temps: [] }, timeSince: 0 };

    this.getRawData = this.getRawData.bind(this);
  }
  componentDidMount() {
    this.getRawData();
  }

  getRawData() {
    var tempsRef = firebase.database().ref("/temps/");
    tempsRef.on("value", (snapshot) => {
      let list = Object.entries(snapshot.val());
      let newList: rawDataStructure[] = list.map(([key, value]) => {
        return {
          date: parseInt(key + "000"),
          temps: value,
        };
      });
      this.setState({ rawData: newList });
      let latest = newList[newList.length - 1];
      this.setState({ latest: latest });
      let lastTime = new Date(latest.date);
      let difference = Math.trunc((Date.now() - lastTime.getTime()) / 60000);
      this.setState({ timeSince: difference });
    });
    console.log("got data");
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-column min-vh-100">
        {/*With div below, forces footer to the bottom when there is not enough content to fill the page.*/}
        {/*Only here and p5 page since only those actually need it.*/}
        <div className="flex-grow-1">
          <NavBar />
          <div className="d-flex justify-content-center">
            <Chart width={800} height={500} data={this.state.rawData} />
          </div>
          <div className="row row-cols-1 row-cols-md-3 mt-2">
            <div className="col">
              Updated {this.state.timeSince} minutes ago
            </div>
            <div className="col">Sensor 1: {this.state.latest.temps[0]}</div>
            <div className="col">Sensor 2: {this.state.latest.temps[1]}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
