import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        // mock hardcoded data for out chart
        const data = [4, 6, 9, 11, 4];
        // create an SVG with d3 with a height of 300 and width of 700
        const svg = d3.select("body")
            .append("svg")
            .attr("width", 700)
            .attr('height', 300)
            .style('margin-left', 100);

        // selects all rect elements 
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 70)
            .attr('y', (d, i) => 10 * d)
            .attr('width', 25)
            .attr('height', (d, i) => d * 10)
            .attr('fill', 'green');
    }

    render() {
        return <div id={ "#" + this.props.id }></div>
    }
}

export default BarChart;
