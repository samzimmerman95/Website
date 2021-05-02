import * as d3 from "d3";
import { AnyAaaaRecord } from "node:dns";
import { SHARE_ENV } from "node:worker_threads";
import React, { useRef, useEffect, useState } from "react";

const margin = { top: 20, right: 20, bottom: 25, left: 25 };

export default function CurrentTempChart({ width, height, data }: any) {
  const ref = useRef(null);
  //   console.log(data);
  useEffect(() => {
    // Get the SVG and setup
    const svg = d3.select(ref.current);
    svg
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");

    //X Axis
    // var tempRange = d3.extent(data.temps, (d: any) => parseFloat(d));
    var scaleX = d3
      .scaleLinear()
      //   .domain(tempRange as [number, number])
      //   .nice()
      .domain([50, 100])
      .range([margin.left, width - margin.right]);

    function xAxis(g: any) {
      g.attr("transform", `translate(0,${height - margin.bottom})`)
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .call(
          d3
            .axisBottom(scaleX)
            .ticks(width / 60)
            .tickSizeOuter(0)
        );
    }
    svg.select(".x-axis").call(xAxis);

    //Y Axis
    var scaleY: any = d3
      .scaleBand()
      .domain(["Air ", "2ft ", "4ft ", "6ft ", "8ft "])
      .rangeRound([margin.top, height - margin.bottom])
      .padding(0.2);

    function yAxis(g: any) {
      g.attr("transform", `translate(${margin.left}, 0)`)
        .style("font-size", "13px")
        .style("font-weight", "bold")
        .call(d3.axisLeft(scaleY).tickSize(0))
        .call((g: any) => g.select(".domain").remove());
    }
    svg.select(".y-axis").call(yAxis);

    // Associating the data with the correct label
    if (data.temps.length) {
      let labeledData = [
        { label: "Air", temp: parseFloat(data.temps[0]) },
        { label: "2ft", temp: parseFloat(data.temps[1]) },
        { label: "4ft", temp: 55.23 },
        { label: "6ft", temp: 80.5 },
        { label: "8ft", temp: 63.2 },
      ];

      // Bars
      svg
        .append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(labeledData)
        .join("rect")
        .attr("x", scaleX(50))
        .attr("y", (d: any) => scaleY(d.label + " "))
        .attr("width", (d: any) => scaleX(d.temp) - scaleX(50))
        .attr("height", scaleY.bandwidth())
        .on("mouseover", (event: any, data: any) => {
          //   console.log(event, data);
          d3.select(event.target)
            .style("stroke", "steelblue")
            .style("stroke-width", 2);
          svg
            .select(".toolContainer")
            .call(toolTip, event.offsetX, event.offsetY, data);
        })
        .on("mouseout", (event: any, data: any) => {
          d3.select(event.target).attr("fill", "steelblue");
          d3.select(event.target).style("stroke-width", 0);
          svg.select(".toolContainer").selectAll("*").remove();
        });

      // Labels for the bars
      svg
        .append("g")
        .attr("fill", "white")
        .attr("text-anchor", "end")
        .attr("font-family", "sans-serif")
        .attr("font-size", 13)
        .selectAll("text")
        .data(labeledData)
        .join("text")
        .attr("x", (d) => scaleX(d.temp))
        .attr("y", (d, i) => scaleY(d.label + " ") + scaleY.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("dx", -4)
        .text((d) => d.temp)
        .call((text) =>
          text
            .filter((d) => scaleX(d.temp) - scaleX(50) < 35) // short bars
            .attr("dx", +4)
            .attr("fill", "black")
            .attr("text-anchor", "start")
        );
    } // End If

    // Chart Title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0 + margin.top)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("Current Temperatures");

    // Tooltip
    function toolTip(g: any, offsetX: number, offsetY: number, data: any) {
      var tipText: string = "";
      if (data.label === "Air") {
        tipText = data.label + " is " + data.temp + " °F";
      } else {
        tipText = "Water at " + data.label + " is " + data.temp + " °F";
      }

      g.attr("transform", `translate(${offsetX - 25}, ${offsetY - 30} )`)
        .attr("class", "toolContainer")
        .raise();

      g.append("rect")
        .attr("class", "toolBox")
        .attr("width", tipText.length * 6)
        .attr("height", 20)
        .style("fill", "white")
        .style("stroke", "gray")
        .style("stroke-width", 1)
        .style("opacity", 0)
        .transition()
        .duration(500)
        .style("opacity", 1);
      g.append("text")
        .attr("class", "toolText")
        .attr("x", 5)
        .attr("y", 14)
        .attr("text-anchor", "start")
        .style("font-size", "13px")
        .text(tipText)
        .style("opacity", 0)
        .transition()
        .duration(500)
        .style("opacity", 1);
    }
  }, [width, height, data]);
  return (
    <div className="chart">
      <svg
        ref={ref}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          height: "100%",
          width: "100%",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <g className="graphContentAir" clipPath={`url(#myLineChart)`}></g>
        <g className="graphContent2ft" clipPath={`url(#myLineChart)`}></g>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
        <g className="toolContainer"></g>
      </svg>
    </div>
  );
}
