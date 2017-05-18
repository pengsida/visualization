# d3的simulation
参考网站：[API网站](https://github.com/xswei/d3js_doc/tree/master/API/d3-force-master)

首先看例子：
```javascript
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; })) //连线作用力
    .force("charge", d3.forceManyBody()) //节点间的作用力
    .force("center", d3.forceCenter(width / 2, height / 2)); //重力，布局有一个参考位置，不会跑偏

simulation
  .nodes(graph.nodes)
  .on("tick", ticked);

simulation.force("link")
    .links(graph.links);
```

文档目录：

* [d3.forceSimulation](#forceSimulation)
* [simulation.force](#force)
* [simulation.nodes](#nodes)
* [simulation.on](#on)
* [simulation.alpha](#alpha)
* [simulation.restart](#restart)

<h2 id="forceSimulation"> d3.forceSimulation([nodes])</h2>

根据指定的节点数组创建一个没有作用力的仿真。
如果没有指定nodes则默认为空数组。

仿真会自动开始，可以通过simulation.on来为仿真的每一次tick添加事件监听器。
也可以使用simulation.stop来停止仿真，simulation.tick来再次启用仿真。

<h2 id="force"> simulation.force(name[, force])</h2>

默认情况下，仿真是中的节点是没有力的作用的，需要通过这个方法为仿真系统设置力的作用，
力有很多种，需要根据实际情况指定。

If force is specified, assigns the force for the specified name and returns this simulation. If force is not specified, returns the force with the specified name, or undefined if there is no such force. 

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

simulation.force("link")
    .links(graph.links);
```

#### link.links([links])

如果有给出links数组，就将links数组与force()函数联系起来，并且为links数组中的每一个link重新计算distance和strength参数，然后返回force。

If links is specified, sets the array of links associated with this force, recomputes the distance and strength parameters for each link, and returns this force. If links is not specified, returns the current array of links, which defaults to the empty array.

每个link都是包含以下两个属性的对象:

1. source - 源数节点
2. target - 目标节点
3. index - 在links数组中的索引

为方便起见，每个连接的源和目的可以是数字索引或者字符串标示符。参考link.id.

If the specified array of links is modified, such as when links are added to or removed from the simulation, this method must be called again with the new (or changed) array to notify the force of the change; the force does not make a defensive copy of the specified array.

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

<h2 id="nodes">simulation.nodes([nodes])</h2>

首先看例子：
```javascript
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; })) //连线作用力
    .force("charge", d3.forceManyBody()) //节点间的作用力
    .force("center", d3.forceCenter(width / 2, height / 2)); //重力，布局有一个参考位置，不会跑偏

simulation
  .nodes(graph.nodes)
  .on("tick", ticked);
```

如果指定了nodes，则根据当前的nodes对象数组初始化仿真的节点初始位置和速度。
如果没有指定nodes则根据指定的构造器返回节点对象数组。

每个节点为一个对象类型，以下几个属性是通过仿真模拟器添加的：

* index - 节点的索引
* x - 节点当前的 x-位置
* y - 节点当前的 y-位置
* vx - 节点当前的 x-速度
* vy - 节点当前的 y-速度

位置 ⟨x,y⟩ 和速度 ⟨vx,vy⟩ 可能被随时修改. 如果 vx or vy 中的其中一个为NaN, 则速度会被初始化为 ⟨0,0⟩.

如果 x 或 y 为 NaN, 则位置会根据phyllotaxis arrangement进行初始化，不再是随机的。

如果要为某个节点设置默认的位置，则需要为该节点设置如下两个属性:

* fx - x-位置
* fy - y-位置

在每次tick完成后，定义了node.fx的节点的node.x将被重置为node.fx，node.vx被设置为0. 

同理node.y将被重置为node.fy，node.vy被设置为0. 
在设置完时候node.fx 和 node.fy就被定义为null或移除这两个属性。

如果节点数组中的元素发生改变，比如移除或添加一个节点。则需要重新调用这个方法。

<h2 id="on">simulation.on(typenames, [listener])</h2>

```javascript
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; })) //连线作用力
    .force("charge", d3.forceManyBody()) //节点间的作用力
    .force("center", d3.forceCenter(width / 2, height / 2)); //重力，布局有一个参考位置，不会跑偏

simulation
  .nodes(graph.nodes)
  .on("tick", ticked);

function ticked() {
  link
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}
```

设置或获取事件监听器。

事件监听器通过type.names的形式指定，也就是同一种type可以根据name指定多个事件监听器。type有如下两种:

* tick - 每次tick时调用.
* end - 仿真结束时调用，也就是 alpha < alphaMin.

tick事件不会由simulation.tick触发，仅仅可以通过内部计时器触发。

<h2 id="alpha">simulation.alpha([alpha])</h2>

设定动画的冷却系数，运动过程中该系数会不断减小，直到等于0为止，此时动画也停止了。

## simulation.alphaTarget([target])

If target is specified, sets the current target alpha to the specified number in the range [0,1] and returns this simulation. If target is not specified, returns the current target alpha value, which defaults to 0.

<h2 id="restart">simulation.restart()</h2>

重启simulation的定时器，并返回simulation。

Restarts the simulation’s internal timer and returns the simulation. In conjunction with simulation.alphaTarget or simulation.alpha, this method can be used to “reheat” the simulation during interaction, such as when dragging a node, or to resume the simulation after temporarily pausing it with simulation.stop.

例子如下：
```javascript
function dragstarted(d) {
  if (!d3.event.active) 
    simulation.alphaTarget(0.3).restart();
    
  d.fx = d.x;
  d.fy = d.y;
}
```