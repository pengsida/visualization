# d3中word cloud的使用

## d3.layout.cloud()

创建一个cloud布局。

## layout.on(type, listener)

Registers the specified listener to receive events of the specified type from the layout. Currently, only "word" and "end" events are supported.

A "word" event is dispatched every time a word is successfully placed. Registered listeners are called with a single argument: the word object that has been placed.

An "end" event is dispatched when the layout has finished attempting to place all words. Registered listeners are called with two arguments: an array of the word objects that were successfully placed, and a bounds object of the form [{x0, y0}, {x1, y1}] representing the extent of the placed objects.

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