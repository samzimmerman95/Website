import React from "react";
import firebase from "../initFirebase";
import Chart from "./Chart";
import NavBar from "../NavBar";

type weatherState = {
  rawData: any;
};

type rawDataStructure = {
  date: number;
  temps: any;
};

export default class WeatherPage extends React.Component<{}, weatherState> {
  constructor(props: any) {
    super(props);
    this.state = { rawData: [] };

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
    });
    console.log("got data");
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <div className="d-flex justify-content-center">
          <Chart width={1000} height={600} data={this.state.rawData} />
        </div>
      </div>
    );
  }
}
