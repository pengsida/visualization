# d3的drag

首先看例子：
```javascript
d3.selectAll(".node").call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
```

## d3.drag()

创建一个拖拽行为，并返回行为drag，需要注意的是，这个drag既是个对象也是个函数。

drag函数的用法在下面介绍介绍。

Creates a new drag behavior. The returned behavior, drag, is both an object and a function。

例子如下：

```javascript
var drag = d3.drag();
```

### drag(selection)

将drag行为应用到特定的selection上。这个函数一般由selection.call()调用。

Applies this drag behavior to the specified selection. This function is typically not invoked directly, and is instead invoked via selection.call. For example, to instantiate a drag behavior and apply it to a selection:

```javascript
d3.selectAll(".node").call(d3.drag().on("start", started));
```

我们可以使用以下语句将drag行为与selection解绑：
```javascript
selection.on(".drag", null);
```
## drag.on(typenames, [listener])

设置事件监听器。

- If listener is specified, sets the event listener for the specified typenames and returns the drag behavior. 
- If an event listener was already registered for the same type and name, the existing listener is removed before the new listener is added. 
- If listener is null, removes the current event listeners for the specified typenames, if any. 
- If listener is not specified, returns the first currently-assigned listener matching the specified typenames, if any. When a specified event is dispatched, each listener will be invoked with the same context and arguments as selection.on listeners: the current datum d and index i, with the this context as the current DOM element.

The typenames is a string containing one or more typename separated by whitespace. Each typename is a type, optionally followed by a period (.) and a name, such as drag.foo and drag.bar; the name allows multiple listeners to be registered for the same type. 

typename有如下三个：

* start - after a new pointer becomes active (on mousedown or touchstart).
* drag - after an active pointer moves (on mousemove or touchmove).
* end - after an active pointer becomes inactive (on mouseup, touchend or touchcancel).

例子如下：
```javascript
d3.selectAll(".node").call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
```