# d3中word cloud的使用

## d3.layout.cloud()

创建一个cloud布局。

## layout.on(type, listener)

Registers the specified listener to receive events of the specified type from the layout. Currently, only "word" and "end" events are supported.

A "word" event is dispatched every time a word is successfully placed. Registered listeners are called with a single argument: the word object that has been placed.

An "end" event is dispatched when the layout has finished attempting to place all words. Registered listeners are called with two arguments: 

1. an array of the word objects that were successfully placed

        格式为：{text: "...", size: ..., font: "...", style: "...", weight: "...", …}

2. 代表了摆放字体的范围。a bounds object of the form [{x0, y0}, {x1, y1}] representing the extent of the placed objects.

## layout.start()

Starts the layout algorithm. 

## layout.size([size])

设置布局的大小。

## layout.font([font])

设置字体。

## layout.fontStyle([fontStyle])

设置字形。

## layout.fontWeight([fontWeight])

设置font weigth。

## layout.fontSize([fontSize])

设置字体大小。

## layout.rotate([rotate])

设置字体的旋转角度。

## layout.padding([padding])

设置每个字的间隔。

## layout.timeInterval([time])

Internally, the layout uses setInterval to avoid locking up the browser’s event loop. 

If specified, time is the maximum amount of time that can be spent during the current timestep. 
If not specified, returns the current maximum time interval, which defaults to Infinity.

## spiral([spiral])

设置摆放字的螺旋类型。

This can either be one of the two built-in spirals, "archimedean" and "rectangular", or an arbitrary spiral generator can be used, of the following form:

```javascript
// size is the [width, height] array specified in cloud.size
function(size) {
  // t indicates the current step along the spiral; it may monotonically
  // increase or decrease indicating clockwise or counterclockwise motion.
  return function(t) { return [x, y]; };
}
```

If not specified, returns the current spiral generator, which defaults to the built-in "archimedean" spiral.