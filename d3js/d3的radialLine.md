# d3的radialLine

参考网站：[http://www.cnblogs.com/yaoyinglong/p/5904221.html](http://www.cnblogs.com/yaoyinglong/p/5904221.html)

使用默认的角度，半径访问器，和插值器函数构造一个径向线生成器，返回的函数用以生成开放分段线性曲线、折线。
例子如下：
```javascript
// 角度访问器
radialLine.angle()
// 半径访问器
radialLine.radius()
```

它和line生成器很相似，只是将line的x,y访问其换位angle，radius生成器。
可以将它想想成一个圆规在画圆，但是在划的过程中不停的改变角度。

radius访问器和angle访问器结合使用，表示在特定的角度上的半径是多少。它们一般都接受函数（也可以写成常数）。

使用radialLine的例子如下：
```javascript
var per = 2*Math.PI/6;
var data = [
    {r:100,angle:0},
    {r:100,angle:per*1},
    {r:100,angle:per*2},
    {r:100,angle:per*3},
    {r:100,angle:per*4},
    {r:100,angle:per*5},
    {r:100,angle:per*6}
];

var radialLine = d3.radialLine()
        .radius(function (d) { return d.r;})
        .angle(function(d){ return d.angle;});

d3.select("svg").append("g").append("path")
        .attr("class","line")
        .attr("d",radialLine(data))
        .attr("transform","translate(200,200)");
```