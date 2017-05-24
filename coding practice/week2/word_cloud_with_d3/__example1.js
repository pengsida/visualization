/**
 * Created by pengsida on 2017/5/20.
 */

var layout;

d3.json("example1.json", function (err, data) {
   if (err)
       throw err;

   // 设置layout
   layout = d3.layout.cloud()
       .size([800, 400])
       .words(data.words)
       .fontSize(function (d) {
           return d.size;
       })
       .rotate(0)
       .on("end", draw);

   layout.start();
});

function draw(words) {
    var svg = d3.select("body").append("svg");
    var g = svg.append("g");
    var text = g.selectAll("text")
        .data(words)
        .enter()
        .append("text");
    var color = d3.scale.linear()
        .domain([0,1,2,3,4,5,6,10,15,20,100])
        .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

    svg.attr("width", layout.size()[0]);
    svg.attr("height", layout.size()[1]);
    g.attr("transform", function () {
        return "translate(" + [svg.attr("width")/2, svg.attr("height")/2] + ")";
    });

    text.style("fill", function (d, i) {
        return color(i);
    });

    text.style("font-size", function (d) {
        return d.size + "px";
    });

    text.attr("text-anchor", "middle");

    text.attr("transform", function (d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    });

    text.text(function (d) {
        return d.text;
    });
}