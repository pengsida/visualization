# javascript动态添加svg元素

创建svg节点时，要使用createElementNS函数并传入节点名称的命名空间。
否则创建出来的节点默认为html dom而不是svg dom。这样的话，将其append到svg节点下时，不会显示。

例子如下：
```javascript
<svg xmlns="http://www.w3.org/2000/svg"
     id="svg"
     version="1.1"
     width="900" height="600"></svg>

<script>
    function createNode(i) {
        var node = document.createElementNS('http://www.w3.org/2000/svg',"circle");
        node.setAttribute("id", "node"+i);
        node.setAttribute("r", "5");
        node.setAttribute("fill", "black");
        node.setAttribute("cx", String(300+50*i));
        node.setAttribute("cy", String(300+50*i));
        return node;
    }
</script>

<script>
    var svg = document.getElementById("svg");
    var nodes = document.createElementNS('http://www.w3.org/2000/svg',"g");
    var node;
    var i;
    nodes.setAttribute("class", "nodes");
    svg.appendChild(nodes);

    for(i = 0; i < 2; i++)
    {
        node = createNode(i);
        nodes.appendChild(node);
    }

    for(i = 0; i < 500; i++)
    {
        node.setAttribute("cx", String(350+i*0.5));
        node.setAttribute("cy", String(350+i*0.5));
    }
</script>
```