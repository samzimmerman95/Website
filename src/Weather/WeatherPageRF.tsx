import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import firebase from "../initFirebase";
import Chart from "./Chart";
import CurrentTempChart from "./CurrentTempChart";
import ChangeTempChart from "./ChangeTempChart";
import NavBar from "../NavBar";
import Footer from "../Footer";

interface rawData {
  date: number;
  temps: any;
}

export default function WeatherPageRF() {
  const [allData, setAllData] = useState<rawData[]>([]);
  const [lastMonthData, setLastMonthData] = useState<rawData[]>([]);
  const [lastWeekData, setLastWeekData] = useState<rawData[]>([]);
  const [lastDayData, setLastDayData] = useState<rawData[]>([]);
  const [currentTimeSelected, setCurrentTimeSelected] = useState("Month");
  const [latest, setLatest] = useState<rawData>({ date: 0, temps: [] });
  const [timeSince, setTimeSince] = useState<number>(0);
  const [selectedLines, setSelectedLines] = useState([0]);

  useEffect(() => {
    var tempsRef = firebase.database().ref("/test2/");
    var result: rawData[] = [];
    tempsRef.on("value", (snapshot) => {
      result = Object.entries(snapshot.val()).map(([key, value]) => {
        return {
          date: parseInt(key),
          temps: value,
        };
      });
      console.log("Length Data:", result.length);
      setAllData(result);
      let oneDayMilliseconds = 86400000;
      let lastMonthTime = Date.now() - oneDayMilliseconds * 30;
      let lastWeekTime = Date.now() - oneDayMilliseconds * 7;
      let lastDayTime = Date.now() - oneDayMilliseconds;
      let lastMonth = result.filter((entry) => entry.date > lastMonthTime);
      let lastWeek = result.filter((entry) => entry.date > lastWeekTime);
      let lastDay = lastWeek.filter((entry) => entry.date > lastDayTime);
      setLastMonthData(lastMonth);
      setLastWeekData(lastWeek);
      setLastDayData(lastDay);
      if (result.length > 0) {
        let lastEntry = result[result.length - 1];
        setLatest(lastEntry);
        let lastTime = new Date(lastEntry.date);
        let difference = Math.trunc((Date.now() - lastTime.getTime()) / 60000);
        setTimeSince(difference);
      }
    });
  }, []);

  // Every minute calculate new timeSince and update
  useEffect(() => {
    const interval = setInterval(() => {
      let lastTime = new Date(latest.date);
      let difference = Math.trunc((Date.now() - lastTime.getTime()) / 60000);
      setTimeSince(difference);
    }, 60000);

    return () => clearInterval(interval);
  }, [latest]);

  function ChangeChart() {
    if (currentTimeSelected === "Day") {
      return (
        <Chart
          width={1000}
          height={500}
          data={lastDayData}
          selectedLines={selectedLines}
        />
      );
    } else if (currentTimeSelected === "Week") {
      return (
        <Chart
          width={1000}
          height={500}
          data={lastWeekData}
          selectedLines={selectedLines}
        />
      );
    } else if (currentTimeSelected === "Month") {
      return (
        <Chart
          width={1000}
          height={500}
          data={lastMonthData}
          selectedLines={selectedLines}
        />
      );
    } else {
      return (
        <Chart
          width={1000}
          height={500}
          data={allData}
          selectedLines={selectedLines}
        />
      );
    }
  }
  function ToggleButtonLinesGroup() {
    // const [selectedLines, setSelectedLines] = useState([1]);
    const handleChange = (val: number[]) => setSelectedLines(val);
    // console.log(selectedLines);
    return (
      <ToggleButtonGroup
        type="checkbox"
        size="sm"
        // vertical={true}
        value={selectedLines}
        onChange={handleChange}
      >
        <ToggleButton variant="outline-secondary" value={0}>
          Air
        </ToggleButton>
        <ToggleButton variant="outline-secondary" value={1}>
          2ft
        </ToggleButton>
        <ToggleButton variant="outline-secondary" value={2}>
          4ft
        </ToggleButton>
        <ToggleButton variant="outline-secondary" value={3}>
          6ft
        </ToggleButton>
        <ToggleButton variant="outline-secondary" value={4}>
          8ft
        </ToggleButton>
        <ToggleButton variant="outline-secondary" value={5}>
          Avg
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      {/*With div below, forces footer to the bottom when there is not enough content to fill the page.*/}
      {/*Only here and p5 page since only those actually need it.*/}
      <div className="flex-grow-1">
        <NavBar />
        <div className="row justify-content-md-center pb-2">
          <div className="col-md d-flex justify-content-center pb-2 pl-md-5">
            <CurrentTempChart
              width={350}
              height={220}
              data={latest}
            ></CurrentTempChart>
          </div>
          <div className="col-md d-flex justify-content-center pr-md-5">
            <ChangeTempChart
              width={350}
              height={220}
              data={lastWeekData}
            ></ChangeTempChart>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-2">
          <ToggleButtonGroup
            type="radio"
            name="options"
            size="sm"
            defaultValue={currentTimeSelected}
            // value={"All"}
            onChange={setCurrentTimeSelected}
          >
            <ToggleButton variant="outline-secondary" value={"Day"}>
              24 Hours
            </ToggleButton>
            <ToggleButton variant="outline-secondary" value={"Week"}>
              Last Week
            </ToggleButton>
            <ToggleButton variant="outline-secondary" value={"Month"}>
              Last Month
            </ToggleButton>
            <ToggleButton variant="outline-secondary" value={"All"}>
              All Time
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="d-flex justify-content-center">
          <ChangeChart></ChangeChart>
        </div>
        <div className="d-flex justify-content-center pt-2">
          <ToggleButtonLinesGroup />
        </div>
        <div className="row row-cols-1 row-cols-md-3 mt-2">
          <div className="col">Updated {timeSince} minutes ago</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
