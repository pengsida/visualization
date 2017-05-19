# fdg_withou_d3的实现步骤

力导图算法的实现步骤如下：

1. 操作svg在页面上画上球和线。
2. 让这些球之间产生斥力，从而球会相互远离，同时线会随之变长。
3. 让这些线产生弹簧力，从而对球产生拉力。
4. 实现拖拽效果。

算法实现的步骤就这么简单，当然要会把力导图算法的实现分为上面四个步骤，需要有良好的编程习惯。

完整的代码在这个网站中可以看到：
[https://github.com/wwtalwtaw/visualization/blob/master/coding%20practice/week2/fdg_without_d3/fdg_without_d3.html](https://github.com/wwtalwtaw/visualization/blob/master/coding%20practice/week2/fdg_without_d3/fdg_without_d3.html)

接下来，我直接贴代码，介绍各部分的实现。

## 1. 操作svg在页面上画上球和线

### 画球

在页面上画球，就是添加一些网页元素：
```javascript
var svg = document.getElementById("svg");
var nodes = document.createElementNS('http://www.w3.org/2000/svg',"g");
nodes.setAttribute("class", "nodes");
nodes.setAttribute("id", "nodes");
svg.appendChild(nodes);

var node1 = createNode(120, 120);
var node2 = createNode(120, 150);
var node3 = createNode(130, 110);
var node4 = createNode(170, 190);
```

画球函数如下:
```javascript
function createNode(x, y) {
    var node = document.createElementNS('http://www.w3.org/2000/svg',"circle");
    var nodes = document.getElementById("nodes");

    nodeNum++;
    node.setAttribute("id", "node"+nodeNum);
    node.setAttribute("r", "5");
    node.setAttribute("fill", "black");
    node.setAttribute("cx", String(x));
    node.setAttribute("cy", String(y));
    nodes.appendChild(node);

    return node;
}
```

### 画线

```javascript
var links = document.createElementNS("http://www.w3.org/2000/svg", "g");

links.setAttribute("class", "links");
links.setAttribute("id", "links");
svg.appendChild(links);

drawLine(node1, node2);
drawLine(node2, node3);
drawLine(node3, node4);
```

画线函数如下：
```javascript
function drawLine(node1, node2) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var links = document.getElementById("links");
    var num1 = getNodeNum(node1);
    var num2 = getNodeNum(node2);
    var lineId;

    lineNum++;
    lineId = "line" + lineNum;
    line.setAttribute("id", lineId);
    linksHash[String(num1)+String(num2)] = lineId;
    linksHash[String(num2)+String(num1)] = lineId;
    line.setAttribute("x1", node1.getAttribute("cx"));
    line.setAttribute("y1", node1.getAttribute("cy"));
    line.setAttribute("x2", node2.getAttribute("cx"));
    line.setAttribute("y2", node2.getAttribute("cy"));
    links.appendChild(line);
}
```

## 2. 让这些球之间产生斥力，从而球会相互远离，同时线会随之变长

### 让这些球之间产生斥力，从而球会相互远离

让球之间产生斥力，这在现实生活中看起来是力的作用，在计算机中其实就是小球中心位置每隔20ms的变化。
所谓斥力，在计算机中就是每隔20ms移动距离的长短。斥力大，移动的就大，斥力小，移动的就小。

这里的斥力是库仑力，计算公式如下：

```javascript
function getDelta(node1, node2) {
    var x1 = parseFloat(node1.getAttribute("cx"));
    var y1 = parseFloat(node1.getAttribute("cy"));
    var x2 = parseFloat(node2.getAttribute("cx"));
    var y2 = parseFloat(node2.getAttribute("cy"));
    var deltaX = x2 - x1;
    var deltaY = y2 - y1;

    return [deltaX, deltaY];
}

function getRepulseForce(node1, node2) {
    var delta = getDelta(node1, node2);
    var deltaX = delta[0];
    var deltaY = delta[1];
    var distance = Math.pow(deltaX, 2) + Math.pow(deltaY, 2);

    return 1000.0/distance;
}
```

我们算出力的大小以后，还要算小球之间形成的角度，才能算出x和y方向的分力。
之所以要算各方向的分力，是为了算之后的合力。这是高中物理知识，不多解释。

```javascript
function getTheta(node1, node2) {
    var delta = getDelta(node1, node2);
    var deltaX = delta[0];
    var deltaY = delta[1];
    var theta;

    if (deltaX === 0)
    {
        if (deltaY === 0)
            return 0;

        theta = (deltaY > 0 ? Math.PI/2 : -Math.PI/2);
        return theta;
    }

    theta = Math.atan(deltaY/deltaX);

    if (deltaX > 0)
        return theta;
    else
        return theta + Math.PI;
}
```

在力导图算法函数中使用斥力，让小球因为这斥力而相互远离，需要注意的是，下面这个函数并不完整：

```javascript
function forceDirectedAlgorithm() {
    var nodes = document.getElementById("nodes");
    var i, j;
    var childNodes = nodes.childNodes;
    var xForce, yForce, totalXForce, totalYForce;
    var repulseForce, attractForce, force, theta;
    var realX = new Array(childNodes.length);
    var realY = new Array(childNodes.length);
    var num1, num2;
    var line;

    for (i = 0; i < childNodes.length; i++)
    {
        totalXForce = 0.0;
        totalYForce = 0.0;

        for (j = 0; j < childNodes.length; j++)
        {
            if (i === j)
                continue;

            repulseForce = getRepulseForce(childNodes[i], childNodes[j]);
            ...

            force = repulseForce + attractForce;

            theta = getTheta(childNodes[j], childNodes[i]);
            xForce = force * Math.cos(theta);
            yForce = force * Math.sin(theta);

            totalXForce += xForce;
            totalYForce += yForce;
        }

        realX[i] = totalXForce + parseFloat(childNodes[i].getAttribute("cx"));
        if (realX[i] < 0 || realX[i] > svg.getAttribute("width"))
            realX[i] = parseFloat(svg.getAttribute("width")) / 2.0;

        realY[i] = totalYForce + parseFloat(childNodes[i].getAttribute("cy"));
        if (realY[i] < 0 || realY[i] > svg.getAttribute("height"))
            realY[i] = parseFloat(svg.getAttribute("height")) / 2.0;
    }

    for (i = 0; i < childNodes.length; i++)
        updateNode(childNodes[i], realX[i], realY[i]);

    for (i = 0; i < childNodes.length; i++)
        updateLine(childNodes[i]);

    ...
}
```

这里为了让小球每隔20ms更新一次自己的中心坐标，可以使用setInterval()函数，从而也就实现了动画效果：
```javascript
setInterval(forceDirectedAlgorithm, 20);
```

### 同时线会随之变长

这里其实就是及时地更新了线的属性值，这个在updateLine()函数中实现：
```javascript
function updateLine(node) {
    var childNodes = node.parentNode.childNodes;
    var i;
    var num1, num2;
    var line, lineId;

    num1 = getNodeNum(node);

    for (i = 0; i < childNodes.length; i++)
    {
        if (childNodes[i] === node)
            continue;

        num2 = getNodeNum(childNodes[i]);
        lineId = linksHash[String(num1)+String(num2)];

        if (typeof(lineId) === "undefined")
            continue;

        line = document.getElementById(lineId);
        line.setAttribute("x1", node.getAttribute("cx"));
        line.setAttribute("y1", node.getAttribute("cy"));
        line.setAttribute("x2", childNodes[i].getAttribute("cx"));
        line.setAttribute("y2", childNodes[i].getAttribute("cy"));
    }
}
```

这里面其实隐含着一个小技巧，就是我们如何知道要更新哪一条线呢？
换句话说，现在我们传入了一个node，但我们如何知道它和哪些node相连，知道它相应的线是哪些？

node自己肯定不知道啊，我们需要自己实现一个存储球与线的信息的数据结构。
考虑到方便性和效率，我使用了hash表。javascript中没有现成的hash结构，不过它的object数据类型和hash结构的特性有些相似。

声明这个存储球与线的信息的数据结构：
```javascript
var linksHash = {};
```

我在创建线的时候更新这个hash结构：
```javascript
function drawLine(node1, node2) {
    ...
    var num1 = getNodeNum(node1);
    var num2 = getNodeNum(node2);
    var lineId;

    lineNum++;
    lineId = "line" + lineNum;
    ...
    linksHash[String(num1)+String(num2)] = lineId;
    linksHash[String(num2)+String(num1)] = lineId;
    ...
}
```

hash结构中存放的是线的id，而它的索引值是两个小球序号的组合。比如“node1”和“node2”，索引值就是“12”和“21”，
这保证了索引值的唯一性。

之后就可以根据id直接得到line元素：
```javascript
lineId = linksHash[String(num1)+String(num2)];
line = document.getElementById(lineId);
```

## 3. 让这些线产生弹簧力，从而对球产生拉力

这个和实现斥力的步骤很像，计算斥力的函数如下：

```javascript
function getAttractForce(node1, node2) {
    var delta = getDelta(node1, node2);
    var deltaX = delta[0];
    var deltaY = delta[1];
    var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    return -0.003*distance;
}
```

在力导图算法中使用弹簧力，从而对相连的小球产生拉力。如果小球之间没有线，那么弹簧力就为0：

```javascript
function forceDirectedAlgorithm() {
    ...

    for (i = 0; i < childNodes.length; i++)
    {
        totalXForce = 0.0;
        totalYForce = 0.0;

        for (j = 0; j < childNodes.length; j++)
        {
            if (i === j)
                continue;

            ...
            num1 = getNodeNum(childNodes[i]);
            num2 = getNodeNum(childNodes[j]);
            line = linksHash[String(num1)+String(num2)];
            if (typeof(line) === "undefined")
                attractForce = 0;
            else
                attractForce = getAttractForce(childNodes[i], childNodes[j]);

            force = repulseForce + attractForce;

            theta = getTheta(childNodes[j], childNodes[i]);
            xForce = force * Math.cos(theta);
            yForce = force * Math.sin(theta);

            totalXForce += xForce;
            totalYForce += yForce;
        }

        realX[i] = totalXForce + parseFloat(childNodes[i].getAttribute("cx"));
        if (realX[i] < 0 || realX[i] > svg.getAttribute("width"))
            realX[i] = parseFloat(svg.getAttribute("width")) / 2.0;

        realY[i] = totalYForce + parseFloat(childNodes[i].getAttribute("cy"));
        if (realY[i] < 0 || realY[i] > svg.getAttribute("height"))
            realY[i] = parseFloat(svg.getAttribute("height")) / 2.0;
    }

    for (i = 0; i < childNodes.length; i++)
        updateNode(childNodes[i], realX[i], realY[i]);

    for (i = 0; i < childNodes.length; i++)
        updateLine(childNodes[i]);

    ...
}
```

## 4. 实现拖拽效果

这里就利用了javascript中的鼠标事件，首先声明触发鼠标事件的元素和相应的触发函数：

```javascript
document.onmousedown = drag_start;
node1.onmousemove = dragging;
node2.onmousemove = dragging;
node3.onmousemove = dragging;
node4.onmousemove = dragging;
document.onmouseup = drag_end;
```

然后实现各个触发函数：
```javascript
var isDragging = 0;

function getMouseXY(event) {
    var x, y;
    event = event || window.event;

    if (event.pageX)
    {
        x = event.pageX;
        y = event.pageY;
    }
    else
    {
        x = event.clientX - document.body.clientLeft + document.body.scrollLeft;
        y = event.clientY - document.body.clientTop + document.body.scrollTop;
    }

    return {x: x, y: y};
}

function getParentXY() {
    var offsetLeft = svg.offsetLeft;
    var offsetTop = svg.offsetTop;

    return {x: offsetLeft, y: offsetTop};
}

function drag_start(event) {
    isDragging = 1;
    if (runTimes <= 0)
    {
        runTimes = RUNTIMES;
        forceDirect = setInterval(forceDirectedAlgorithm, 20);
    }
}

function dragging(event) {
    var mouseXY;
    var parentXY;
    var nodeXY = {};
    var node = event.target;

    if (isDragging)
    {
        runTimes = RUNTIMES;
        mouseXY = getMouseXY(event);
        parentXY = getParentXY();
        nodeXY.x = mouseXY.x - parentXY.x;
        nodeXY.y = mouseXY.y - parentXY.y;
        updateNode(node, nodeXY.x, nodeXY.y);
        updateLine(node);
    }
}

function drag_end(event) {
    isDragging = 0;
}
```

到此为止，我们就实现了力导图算法，完整的代码在这个网址中可以看到：
[https://github.com/wwtalwtaw/visualization/blob/master/coding%20practice/week2/fdg_without_d3/fdg_without_d3.html](https://github.com/wwtalwtaw/visualization/blob/master/coding%20practice/week2/fdg_without_d3/fdg_without_d3.html)