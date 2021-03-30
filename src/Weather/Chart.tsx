import * as d3 from "d3";
import { zoomTransform } from "d3";
import React, { useRef, useEffect, useState } from "react";

const margin = { top: 20, right: 50, bottom: 30, left: 40 };

function Chart({ width, height, data }: any) {
  const ref = useRef(null);
  const [currentZoomState, setCurrentZoomState] = useState();

  useEffect(() => {
    // Get the SVG and setup
    const svg = d3.select(ref.current);
    svg
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");

    // X Axis
    var dateDomain = d3.extent(data, (d: any) => parseInt(d.date));
    var scaleX = d3
      .scaleTime()
      .domain(dateDomain as [number, number])
      .range([margin.left, width - margin.right]);

    if (currentZoomState) {
      let newXScale = (currentZoomState as any).rescaleX(scaleX);
      scaleX.domain(newXScale.domain());
    }
    function xAxis(g: any) {
      g.attr("transform", `translate(0,${height - margin.bottom})`)
        .style("font-size", "12px")
        .call(
          d3
            .axisBottom(scaleX)
            .ticks(width / 100)
            .tickSizeOuter(0)
        );
    }
    svg.select(".x-axis").call(xAxis);

    // Y Axis
    var tempRange = d3.extent(data, (d: any) => parseFloat(d.temps[0]));
    var scaleY = d3
      .scaleLinear()
      .domain(tempRange as [number, number])
      .nice()
      .range([height - margin.bottom - 10, margin.top]);

    function yAxis(g: any) {
      g.attr("transform", `translate(${margin.left}, 0)`)
        .style("font-size", "12px")
        .call(d3.axisLeft(scaleY))
        // .call((g: any) => g.select(".domain").remove())
        .call((g: any) =>
          g
            .select(".tick:last-of-type text")
            .clone()
            .attr("x", 3)
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .text("Temperature")
        );
    }
    svg.select(".y-axis").call(yAxis);

    // Line
    let lineGenerator = d3
      .line()
      .x((d: any) => scaleX(d.date))
      .y((d: any) => scaleY(parseFloat(d.temps[0])));

    svg
      .select(".graphContent")
      .selectAll(".myLine")
      .data([data])
      .join("path")
      .attr("class", "myLine")
      .attr("stroke", "steelblue")
      .attr("fill", "none")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", lineGenerator);

    // Second Line
    let lineGenerator2 = d3
      .line()
      .x((d: any) => scaleX(d.date))
      .y((d: any) => scaleY(parseFloat(d.temps[1])));

    svg
      .select(".graphContent2")
      .selectAll(".myLine")
      .data([data])
      .join("path")
      .attr("class", "myLine")
      .attr("stroke", "red")
      .attr("fill", "none")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", lineGenerator2);

    // Label and dot for last temp, Not using rn
    var lastTime: number;
    var lastTemp: number;
    if (data) {
      try {
        let index = data.length - 1;
        lastTime = data[index].date;
        lastTemp = parseFloat(data[index].temps[0]);
      } catch (error) {}
    }
    function lineLabel(g: any) {
      g.attr(
        "transform",
        "translate(" + (width - margin.left) + "," + scaleY(lastTemp) + ")"
      )
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "steelblue")
        .text(lastTemp);
    }
    function endCircle(g: any) {
      if (scaleY(lastTemp)) {
        g.attr("fill", "steelblue")
          .attr(
            "transform",
            "translate(" + scaleX(lastTime) + "," + scaleY(lastTemp) + ")"
          )
          .attr("r", 3);
      }
    }
    // svg.append("text").call(lineLabel);
    // svg.append("circle").call(endCircle);
    svg
      .append("rect")
      .attr("x", width - 80)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", "steelblue");

    svg
      .append("text")
      .attr("x", width - 60)
      .attr("y", 25)
      .text("Sensor 1")
      .style("font-size", "13px")
      .attr("alignment-baseline", "middle");

    // Zooming functionality
    var zoom: any = d3
      .zoom()
      .scaleExtent([1, data.length / 5])
      .extent([
        [margin.left, 0],
        [width - margin.right, height],
      ])
      .translateExtent([
        [margin.left, 0],
        [width - margin.right, height],
      ])
      .on("zoom", () => {
        const zoomState = zoomTransform(svg.node() as any);
        // console.log("Zoom state: ", zoomState);
        setCurrentZoomState(zoomState as any);
      });

    svg.call(zoom);

    // If either of these change, useEffect is called again
  }, [currentZoomState, data]);

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
        <defs>
          <clipPath id="myLineChart">
            <rect
              x={margin.left}
              y={margin.bottom - 10}
              width={width - margin.right - margin.left + 1}
              height={height - margin.top - margin.bottom}
            />
          </clipPath>
        </defs>
        <g className="graphContent" clipPath={`url(#myLineChart)`}></g>
        {/* <g className="graphContent2" clipPath={`url(#myLineChart)`}></g> */}
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
    </div>
  );
}

export default Chart;
