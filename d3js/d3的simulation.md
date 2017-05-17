# d3的simulation

参考网站：[API网站](https://github.com/xswei/d3js_doc/tree/master/API/d3-force-master)

<A HREF="#ROP_ARM">ROP_ARM</A>

首先看例子：
```javascript
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; })) //连线作用力
    .force("charge", d3.forceManyBody()) //节点间的作用力
    .force("center", d3.forceCenter(width / 2, height / 2)); //重力，布局有一个参考位置，不会跑偏
```

## d3.forceSimulation([nodes])

根据指定的节点数组创建一个没有作用力的仿真。
如果没有指定nodes则默认为空数组。仿真会自动开始，可以通过simulation.on来为仿真的每一次tick添加事件监听器。
也可以使用simulation.stop来停止仿真，simulation.tick来再次启用仿真。

## simulation.force(name[, force])

默认情况下，仿真是中的节点是没有力的作用的，需要通过这个方法为仿真系统设置力的作用，
力有很多种，需要根据实际情况指定。

接下来介绍几个force函数：
1. d3.forceLink([links])
2. d3.forceManyBody()
3. d3.forceCenter()

### d3.forceLink([links])

为指定的link数组创建一个link作用力。如果没有指定连接关系数组则默认为空。

下面的代码可以参见这个例子：
```javascript
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; })); //连线作用力
```

#### link.links([links])

设置或获取link作用力的连接数组并重新计算distance 和 strength. 如果没有指定links则返回当前的links数组，默认为空.

每个link都是包含以下两个属性的对象:

1. source - 源数节点
2. target - 目标节点
3. index - 在links数组中的索引

为方便起见，每个连接的源和目的可以是数字索引或者字符串标示符。参考link.id.

如果links数组发生了改变，比如添加或删除一个link时则必须重新调用这个方法

#### link.id([id])

设置或获取link中节点的查找方式，默认使用node.index:
```javascript
function id(d) {
  return d.index;
}
```

默认的id访问器允许将source和target设置为基于nodes数组的索引形式，比如:

```javascript
var nodes = [
  {"id": "Alice"},
  {"id": "Bob"},
  {"id": "Carol"}
];

var links = [
  {"source": 0, "target": 1}, // Alice → Bob
  {"source": 1, "target": 2} // Bob → Carol
];
```

也可以使用唯一的字符串来表示，比如:

```javascript
function id(d) {
  return d.id;
}
```

然后可以使用每个节点的id属性的值设置为source和target值:

```javascript
var nodes = [
  {"id": "Alice"},
  {"id": "Bob"},
  {"id": "Carol"}
];

var links = [
  {"source": "Alice", "target": "Bob"},
  {"source": "Bob", "target": "Carol"}
];
```

这个方法当图使用JSON格式表示的时候是很有用的。

当link作用力初始化的时候id访问器都会在每个节点上调用。

#### link.distance([distance])

设置或获取两个节点之间的距离，默认为:

```javascript
function distance() {
  return 30;
}
```

distance访问器会在每个link上调用，也就是可以为每个link设置不同的distance。

#### link.strength([strength])

设置或获取link的强度，默认：
```javascript
function strength(link) {
  return 1 / Math.min(count(link.source), count(link.target));
}
```

count(node)是一个返回与节点链接的其他节点的数量(节点的度)。
这样的默认设置是为了当一个节点度很大时减小强度，提高稳定性。

强度也可以单独设置。

#### forceLink([links]).iterations([iterations])

设置或获取迭代次数，默认为1. 迭代次数越多，最终的仿真效果越好，计算复杂度也越高。

### d3.forceManyBody()

使用默认的设置构建一个多体作用力。

例子如下：
```javascript
var simulation = d3.forceSimulation()
    .force("charge", d3.forceManyBody()); //节点间的作用力
```

#### manyBody.strength([strength])

设置或获取强度参数，可以为负值也可以为正值，分别表示不同的力学类型，默认为:
```javascript
function strength() {
  return -30;
}
```

这个参数可以单独设置，也就是等于可以为不同的节点设置不同的电荷值

#### manyBody.theta([theta])

设置或获取theta参数。theta参数用来设置Barnes–Hut 的近似标准。默认为0.9。

theta是在实现Barnes–Hut approximation时的一个参数，为了加速计算的。

#### manyBody.distanceMin([distance])

设置或获取最小连接距离

#### manyBody.distanceMax([distance])

设置或获取最大连接距离

### d3.forceCenter(x, y)

centering作用力可以使得节点布局开之后围绕某个中心。相当于某个中心点对所有的节点都有一个制约，不会让布局的中心偏离。

根据指定的x和y坐标创建一个centering作用力。默认为⟨0,0⟩.

例子如下：
```javascript
var simulation = d3.forceSimulation()
    .force("center", d3.forceCenter(width / 2, height / 2)); //重力，布局有一个参考位置，不会跑偏
```

#### center.x([x])

设置或获取center的x坐标，默认为0

#### center.y([y])

设置或获取center力的y坐标，默认为0

<A NAME="ROP_ON_ARM">Davi L, Dmitrienko A, Sadeghi A R, et al. [Return-oriented programming without returns on ARM](http://www.trust.informatik.tu-darmstadt.de/fileadmin/user_upload/Group_TRUST/PubsPDF/ROP-without-Returns-on-ARM.pdf)[J]. System Security Lab-Ruhr University Bochum, Tech. Rep, 2010.</a>