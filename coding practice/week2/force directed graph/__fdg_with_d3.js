/**
 * Created by pengsida on 2017/5/16.
 */

var svg = d3.select("svg");

var color = d3.scaleOrdinal(d3.schemeCategory20);

d3.json("miserables.json", function (err, graph) {
    if (err)
        throw err;

    var lines = svg.append("g").attr("class", "links")
        .selectAll("line").data(graph.links).enter()
        .append("line")
        .attr("stroke-width", function (d) {
            return Math.sqrt(d.value);
        });

    var nodes = svg.append("g").attr("class", "nodes")
        .selectAll("circle").data(graph.nodes).enter()
        .append("circle")
        .attr("r", 5)
        .attr("fill", function (d) {
            return color(d.group);
        })
        .attr("cx", function (d, i) {
            return 4*i;
        })
        .attr("cy", function (d, i) {
            return 4*i;
        });
});