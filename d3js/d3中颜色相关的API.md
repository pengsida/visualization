# d3中颜色相关的API

参考网站：[http://blog.csdn.net/lzhlzz/article/details/45131605](http://blog.csdn.net/lzhlzz/article/details/45131605)

## d3.schemeCategory20

返回一个数组：
```
["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]
```

### d3.interpolateRgb(a, b)

返回一个颜色插值函数。

Returns an RGB color space interpolator between the two colors a and b with a configurable gamma. 
If the gamma is not specified, it defaults to 1.0. The colors a and b need not be in RGB; 
they will be converted to RGB using d3.rgb. The return value of the interpolator is an RGB string.

例子如下：
```javascript
var a = d3.rgb(255,0,0);	//红色
var b = d3.rgb(0,255,0);	//绿色

var compute = d3.interpolate(a,b);

console.log( compute(0) );		//输出#ff0000
console.log( compute(0.2) );		//输出#cc3300
console.log( compute(0.5) );		//输出#808000
console.log( compute(1) );		//输出#00ff00

console.log( compute(2) );		//输出#00ff00
console.log( compute(-1) );		//输出#ff0000
```

这段代码里，先定义了两个颜色：红和绿。然后调用d3.interpolate(a, b)，会返回一个函数，函数保存在compute里。
这时候，compute就是一个函数，
它接收一个数值，数值为0时，返回红色，数值为1时，返回绿色。
数值为0到1之间的值时，返回位于红色和绿色之间的颜色。