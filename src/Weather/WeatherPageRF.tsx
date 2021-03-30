import React, { useEffect, useState } from "react";
import firebase from "../initFirebase";
import Chart from "./Chart";
import NavBar from "../NavBar";
import Footer from "../Footer";

interface rawData {
  date: number;
  temps: any;
}

async function getDataFromFirebase() {
  var tempsRef = firebase.database().ref("/temps/");
  var newList: rawData[] = [];
  await tempsRef.once("value").then((snapshot) => {
    let list = Object.entries(snapshot.val());
    newList = list.map(([key, value]) => {
      return {
        date: parseInt(key + "000"),
        temps: value,
      };
    });
  });
  return newList;
}

export default function WeatherPageRF() {
  const [allData, setAllData] = useState<rawData[]>([]);
  const [latest, setLatest] = useState<rawData>({
    date: 0,
    temps: [0, 0],
  });
  const [timeSince, setTimeSince] = useState<number>(0);

  useEffect(() => {
    getDataFromFirebase().then((result) => {
      setAllData(result);
      let lastEntry = result[result.length - 1];
      setLatest(lastEntry);
      let lastTime = new Date(lastEntry.date);
      let difference = Math.trunc((Date.now() - lastTime.getTime()) / 60000);
      setTimeSince(difference);
    });
  }, []);

  useEffect(() => {}, [allData]);

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      {/*With div below, forces footer to the bottom when there is not enough content to fill the page.*/}
      {/*Only here and p5 page since only those actually need it.*/}
      <div className="flex-grow-1">
        <NavBar />
        <div className="d-flex justify-content-center">
          <Chart width={800} height={500} data={allData} />
        </div>
        <div className="row row-cols-1 row-cols-md-3 mt-2">
          <div className="col">Updated {timeSince} minutes ago</div>
          <div className="col">Sensor 1: {latest.temps[0]}</div>
          <div className="col">Sensor 2: {latest.temps[1]}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
