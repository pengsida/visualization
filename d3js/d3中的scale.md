# d3中的scale

d3中的scale用于将某一区域的值映射到另一区域，其大小关系不变。

scale很像数学中的函数。例如，对于一个一元二次函数，有 x 和 y 两个未知数，当 x 的值确定时，y 的值也就确定了。

在数学中，x 的范围被称为定义域，y 的范围被称为值域。

D3 中的比例尺，也有定义域和值域，分别被称为 domain 和 range。开发者需要指定 domain 和 range 的范围，如此即可得到一个计算关系。

D3 提供了多种比例尺，下面介绍最常用的两种。

## 线性比例尺

线性比例尺，能将一个连续的区间，映射到另一区间。

假设有以下数组：

    var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];

现有要求如下：

将 dataset 中最小的值，映射成 0；将最大的值，映射成 300。

代码如下：
```javascript
var min = d3.min(dataset);
var max = d3.max(dataset);

var linear = d3.scale.linear()
        .domain([min, max])
        .range([0, 300]);

linear(0.9);    //返回 0
linear(2.3);    //返回 175
linear(3.3);    //返回 300
```

其中，d3.scale.linear() 返回一个线性比例尺。domain() 和 range() 分别设定比例尺的定义域和值域。在这里还用到了两个函数，它们经常与比例尺一起出现：

* d3.max()
* d3.min()

## 序数比例尺

有时候，定义域和值域不一定是连续的。例如，有两个数组：
```javascript
    var index = [0, 1, 2, 3, 4];
    var color = ["red", "blue", "green", "yellow", "black"];
```

我们希望 0 对应颜色 red，1 对应 blue，依次类推。

但是，这些值都是离散的，线性比例尺不适合，需要用到序数比例尺。

```javascript
var ordinal = d3.scale.ordinal()
        .domain(index)
        .range(color);

ordinal(0); //返回 red
ordinal(2); //返回 green
ordinal(4); //返回 black
```