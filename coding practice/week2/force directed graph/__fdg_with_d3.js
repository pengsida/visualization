/**
 * Created by pengsida on 2017/5/16.
 */

var svg = d3.select("svg");
var width = svg.attr("width"), height = svg.attr("height");
var color = d3.scaleOrdinal(d3.schemeCategory20);
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width/2, height/2));

d3.json("miserables.json", function (err, graph) {
    if (err)
        throw err;

    var lines = svg.append("g").attr("class", "links")
        .selectAll("line").data(graph.links).enter().append("line")
        .attr("stroke-width", function (d) {
            return Math.sqrt(d.value);
        });

    var nodes = svg.append("g").attr("class", "nodes")
        .selectAll("circle").data(graph.nodes).enter().append("circle")
        .attr("r", 5)
        .attr("fill", function (d) {
            return color(d.group);
        })
        .attr("cx", function (d, i) {
            return 5*i;
        })
        .attr("cy", function (d, i) {
            return 5*i;
        });

    simulation.nodes(graph.nodes);
    simulation.on("tick", ticked);
    simulation.force("link").links(graph.links);

    function ticked() {
        lines
            .attr("x1", function (d) {
                return d.source.x;
            })
            .attr("y1", function (d) {
                return d.source.y;
            })
            .attr("x2", function (d) {
                return d.target.x;
            })
            .attr("y2", function (d) {
                return d.target.y;
            });

        nodes
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            });
    }
});