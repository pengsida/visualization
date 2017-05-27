# d3中的area

参考网站：[http://www.oxxostudio.tw/articles/201411/svg-d3-05-area.html](http://www.oxxostudio.tw/articles/201411/svg-d3-05-area.html)

## x([x])、x0([x0])、x1([x1])、y([y])、y0([y0])、y1([y1])

一開始的 x、x0、x1、y、y0、y1 這六個 API 是要一併處理的，這幾個 API 是專門處理座標的 API，通常 x、y0、y1 互相搭配，y、x0、x1 互相搭配。

x、y0、y1中，x是横坐标，y0和y1分别是上方y坐标和下方y坐标，(x、y0)和(x、y1)两条直线围成一个区域。

例子如下：
```javascript
var data = [
    {x:0, y:18}, 
    {x:20, y:27}, 
    {x:40, y:56}, 
    {x:60, y:34}, 
    {x:80, y:41}, 
    {x:100, y:35}, 
    {x:120, y:100}, 
    {x:140, y:37}, 
    {x:160, y:26}, 
    {x:180, y:21}
    ];

    var width = 240,
      height = 120;

    var s = d3.select('#s');

    s.attr({
        'width': width,
        'height': height,
      });

    var area = d3.area()
        .x(function(d) { return d.x; })
        .y0(0)
        .y1(function(d) { return d.y; });

      s.append('path')
        .attr({
            '    d':area(data),
                'stroke':'#c00',
                'fill':'rgba(255,0,0,.3)',
              'transform':'translate(2,2)'
        });
```

y、x0、x1中，y是纵坐标，x0和x1分别是左边x坐标和右边x坐标，(x0、y)和(x1、y)两条直线围成一个区域。

例子如下：
```javascript
var area = d3.svg.area()
        .y(function(d) { return d.y; })
        .x0(0)
        .x1(function(d) { return d.x; });
```

## area.interpolate([interpolate])、area.tension([tension])

这两个API用于做插值。

```javascript
//對照組
var area1 = d3.area()
    .x(function(d) { return d.x; })
    .y0(0)
    .y1(function(d) { return d.y; });

//實驗組
var area2 = d3.area()
    .x(function(d) { return d.x; })
    .y0(0)
    .y1(function(d) { return d.y; })
    .interpolate('bundle');

    s.append('path')
    .attr({
        'd':area1(data),
        'stroke':'#00c',
        'fill':'rgba(0,0,255,.1)',
        'transform':'translate(2,2)'
    });
    s.append('path')
    .attr({
        'd':area2(data),
        'stroke':'#c00',
        'fill':'rgba(255,0,0,.3)',
        'transform':'translate(2,2)'
    });
```

