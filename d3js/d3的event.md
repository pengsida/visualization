# d3的event

## drag事件

当一个drag事件监听器被调用时，d3.event有如下成员：
- target - the associated drag behavior.相应的drag行为。

- type - the string “start”, “drag” or “end”; drag行为的类型。

- subject - the drag subject, defined by drag.subject.

- x - the new x-coordinate of the subject; see drag.container.

- y - the new y-coordinate of the subject; see drag.container.

- dx - the change in x-coordinate since the previous drag event.

- dy - the change in y-coordinate since the previous drag event.

- identifier - the string “mouse”, or a numeric touch identifier.

- active - drag事件的数量。

- sourceEvent - the underlying input event, such as mousemove or touchmove.

evet.active对于检测start event和last end event很有用。当start event发生时，它是0，当last end event发生时，它也是0。例子如下：
```javascript
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
```

The event object also exposes the event.on method.