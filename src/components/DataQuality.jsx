import { useEffect, useRef } from "react";
import * as d3 from "d3";

const DataQuality = () => {
  const svgRef = useRef(null);
  const scaleRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !scaleRef.current) return;

    // Clear previous renders
    d3.select(svgRef.current).selectAll("*").remove();
    d3.select(scaleRef.current).selectAll("*").remove();

    // Gauge Chart
    const width = 350;
    const height = 250;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.75;
    const padAngle = 0.05;
    const cornerRadius = 5;

    const svg = d3
      .select(svgRef.current)
      .append("g")
      .attr("transform", `translate(${width / 2.3},${height / 2})`);

    // Create gradient definitions
    const defs = svg.append("defs");

    // Red gradient
    const gradientRed = defs
      .append("linearGradient")
      .attr("id", "gradientRed")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");
    gradientRed
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#D05739");
    gradientRed
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#FB7857");

    // Yellow gradient
    const gradientYellow = defs
      .append("linearGradient")
      .attr("id", "gradientYellow")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");
    gradientYellow
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#FF9E00");
    gradientYellow
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#F5C679");

    // Green gradient
    const gradientGreen = defs
      .append("linearGradient")
      .attr("id", "gradientGreen")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");
    gradientGreen
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#09970E");
    gradientGreen
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#033105");

    const pie = d3
      .pie()
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
      .padAngle(padAngle)
      .value((d) => d.value);

    const data = [
      { name: "red", value: 1, fill: "url(#gradientRed)" },
      { name: "yellow", value: 1, fill: "url(#gradientYellow)" },
      { name: "green", value: 1, fill: "url(#gradientGreen)" },
    ];

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);

    // Draw background arcs
    svg
      .selectAll("path.background")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("class", "background")
      .attr("d", arc)
      .attr("fill", (d) => d.data.fill);

    // Add overlay arc at 65%
    const overlayArc = d3
      .arc()
      .innerRadius(innerRadius * 0.8) // Slightly smaller than main arcs
      .outerRadius(innerRadius * 0.8)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    svg
      .append("path")
      .attr("d", overlayArc)
      .attr("fill", "none")
      .attr("stroke", "#e0e0e0")
      .attr("stroke-width", 2);

    //   const pointer = d3.

    // Add arrow at 65%
    const arrowAngle = -90 + 180 * 0.65; // Convert 65% to degrees
    const arrowSize = 10;

    const arrowPath = `M ${-arrowSize / 2} 0 L 0 ${-arrowSize} L ${
      arrowSize / 2
    } 0`;

    svg
      .append("path")
      .attr("d", arrowPath)
      .attr("fill", "#000")
      .attr(
        "transform",
        `translate(35,${-innerRadius * 0.8}) rotate(${arrowAngle})`
      );

    // Make this dynamic
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-1em")
      .style("font-size", "36px")
      .style("font-weight", "bold")
      .text("65%");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.3em") // Adjusted spacing
      .style("font-size", "24px")
      .text("Good");

    // Scale Graph
    const scaleWidth = 350;
    const scaleHeight = 100;
    const scale = d3
      .select(scaleRef.current)
      .attr("width", scaleWidth)
      .attr("height", scaleHeight)
      .append("g")
      .attr("transform", "translate(20,20)");

    // Scale bar data
    const maxValue = 8;
    const currentValue = 6;
    const barHeight = 10;
    const lineHeight = 24;

    // Create scale
    const x = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([0, scaleWidth - 40]);

    // Draw background bar with rounded corners
    scale
      .append("rect")
      .attr("width", x(maxValue))
      .attr("height", barHeight)
      .attr("fill", "#f0f0f0")
      .attr("rx", barHeight / 2);

    // Draw value bar with rounded corners
    scale
      .append("rect")
      .attr("width", x(currentValue))
      .attr("height", barHeight)
      .attr("fill", "#4caf50")
      .attr("rx", barHeight / 2);

    // Add vertical lines at start and end
    scale
      .append("line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    scale
      .append("line")
      .attr("x1", x(maxValue / 10))
      .attr("x2", x(maxValue / 10))
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    scale
      .append("line")
      .attr("x1", x((maxValue * 2) / 10))
      .attr("x2", x((maxValue * 2) / 10))
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    scale
      .append("line")
      .attr("x1", x((maxValue * 3) / 10))
      .attr("x2", x((maxValue * 3) / 10))
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    scale
      .append("line")
      .attr("x1", x((maxValue * 4) / 10))
      .attr("x2", x((maxValue * 4) / 10))
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    scale
      .append("line")
      .attr("x1", x((maxValue * 5) / 10))
      .attr("x2", x((maxValue * 5) / 10))
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    scale
      .append("line")
      .attr("x1", x((maxValue * 6) / 10))
      .attr("x2", x((maxValue * 6) / 10))
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    scale
      .append("line")
      .attr("x1", x((maxValue * 7) / 10))
      .attr("x2", x((maxValue * 7) / 10))
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    scale
      .append("line")
      .attr("x1", x((maxValue * 8) / 10))
      .attr("x2", x((maxValue * 8) / 10))
      .attr("y1", -lineHeight / 2)
      .attr("y2", barHeight + lineHeight / 2)
      .attr("stroke", "#999")
      .attr("stroke-width", 0.5);

    // Add start and end values
    scale
      .append("text")
      .attr("x", 0)
      .attr("y", barHeight + lineHeight + 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "#666")
      .text("0");

    scale
      .append("text")
      .attr("x", x((maxValue * 8) / 10))
      .attr("y", barHeight + lineHeight + 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "#666")
      .text(maxValue);
  }, []);

  return (
    <div className="flex items-center justify-between gap-6">
      <div className="bg-gray-50 p-2 rounded-2xl">
        <h3 className="text-lg font-medium mb-10 ">Data Quality Score</h3>
        <svg ref={svgRef}></svg>
      </div>
      <div className="bg-gray-50 p-2 rounded-2xl h-[230px]">
        <h3 className="text-lg font-medium mb-10">Rules against target</h3>
        <div>
          <div className="flex items-center justify-between px-4">
            <p className="">validity</p>
            <p>6</p>
          </div>
          <svg ref={scaleRef}></svg>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Good</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span className="text-sm text-gray-600">Acceptable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Not Acceptable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataQuality;
