import React, { useRef, useState, useEffect } from "react";
import { select, line, curveCardinal } from "d3";

function Visual() {
	const svgRef = useRef();
    console.log(svgRef);
    
    const [data, setData] = useState([0, 60, 55,80,100, 30,20])

	useEffect(() => {

        const svg = select(svgRef.current)
        // const x = svg.selectAll("circle").data(data);
        // console.log(x);
        // x.join("circle")
        // .attr("r", (value)=> value)
        // .attr("cx", (value)=>value)
        // .attr("stroke" , 'black')
        // .attr("fill", "none")

        const newLine = line()
        .x((value,index)=> index* 20)
        .y((value)=> 200-value)

        svg
        .selectAll("path")
        .data([data])
        .join("path")
        .attr("d", (value)=>newLine(value))
        .attr("fill", "none")
        .attr("stroke", "red")
        

    }, [data]);
	return (
		<div style={{ marginTop: "50px" }}>
			<center>
				<h2>visualization</h2>
				<svg ref={svgRef} height="200" style={{ backgroundColor: "lightgrey" }}>

                    {/* <line x1="20" y1="56" x2='50' y2="80" x3='33' y3="90" stroke="blue" /> */}
                    {/* <rect height="120" width="200" fill="none" stroke='blue' /> */}
                    {/* <circle /> */}
                    {/* <path stroke="blue" fill="none" /> */}
                </svg>
			</center>
			<center>
				<button onClick={()=>{
                    setData(data.map((value)=>value*2))
                }} >Change</button>
				<button onClick={()=>{
                    setData(data.map((value)=>value/2))
                }} >Change back</button>
				<button onClick={()=>{
                    setData(data.map((value)=>value < 100))
                }} >Filter</button>
			</center>
		</div>
	);
}

export default Visual;
