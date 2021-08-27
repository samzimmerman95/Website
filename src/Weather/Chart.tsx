import * as d3 from "d3";
import { zoomTransform } from "d3";
import React, { useRef, useEffect, useState } from "react";

const margin = { top: 20, right: 50, bottom: 30, left: 40 };

function Chart({ width, height, data, selectedLines }: any) {
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
    // Look at all temperatures to determine inclusive range
    var justTemps: number[] = [];
    data.forEach((element: any) => {
      justTemps.push(Math.min(...element.temps), Math.max(...element.temps));
    });
    var tempRange = d3.extent(justTemps, (d: any) => parseFloat(d));
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

    // Create a line generator for each line
    let lineAirGenerator = d3
      .line()
      .x((d: any) => scaleX(d.date))
      .y((d: any) => scaleY(parseFloat(d.temps[0])));
    let line2ftGenerator = d3
      .line()
      .x((d: any) => scaleX(d.date))
      .y((d: any) => scaleY(parseFloat(d.temps[1])));
    let line4ftGenerator = d3
      .line()
      .x((d: any) => scaleX(d.date))
      .y((d: any) => scaleY(parseFloat(d.temps[2])));
    let line6ftGenerator = d3
      .line()
      .x((d: any) => scaleX(d.date))
      .y((d: any) => scaleY(parseFloat(d.temps[3])));
    let line8ftGenerator = d3
      .line()
      .x((d: any) => scaleX(d.date))
      .y((d: any) => scaleY(parseFloat(d.temps[4])));

    // Draw Lines and Legends according to the lines that we have selected
    let colors: string[] = ["steelblue", "red", "green", "purple", "orange"];
    let labels: string[] = ["Air", "2ft", "4ft", "6ft", "8ft", "Avg"];
    let lineGens: any[] = [
      lineAirGenerator,
      line2ftGenerator,
      line4ftGenerator,
      line6ftGenerator,
      line8ftGenerator,
    ];
    let verticalOffset = 20;
    selectedLines.sort().forEach((line: number) => {
      svg
        .select(".graphContent" + labels[line])
        .selectAll(".myLine")
        .data([data])
        .join("path")
        .attr("class", "myLine")
        .attr("stroke", colors[line])
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", lineGens[line]);

      svg
        .append("rect")
        .attr("x", width - 60)
        .attr("y", verticalOffset)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", colors[line]);

      svg
        .append("text")
        .attr("x", width - 40)
        .attr("y", verticalOffset + 5)
        .text(labels[line])
        .style("font-size", "13px")
        .attr("alignment-baseline", "middle");

      verticalOffset += 15;
    });

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
  }, [currentZoomState, data, height, width, selectedLines]);

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
        <g className="graphContentAir" clipPath={`url(#myLineChart)`}></g>
        <g className="graphContent2ft" clipPath={`url(#myLineChart)`}></g>
        <g className="graphContent4ft" clipPath={`url(#myLineChart)`}></g>
        <g className="graphContent6ft" clipPath={`url(#myLineChart)`}></g>
        <g className="graphContent8ft" clipPath={`url(#myLineChart)`}></g>

        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
    </div>
  );
}

export default Chart;
