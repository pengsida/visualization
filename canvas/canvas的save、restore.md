# canvas的save、restore

参考网站：[https://www.w3cplus.com/canvas/canvas-states.html](https://www.w3cplus.com/canvas/canvas-states.html)

Canvas的API提供了两个名叫save()和restore()的方法，用于保存及恢复当前Canvas绘图环境的所有属性。其中save()可以保存当前状态，而restore()可以还原之前保存的状态。

## canvas的状态

```
属性              描述 
canvas          取得画布<canvas>元素 
fillStyle       填充路径的当前的颜色、模式或渐变 
globalCompositeOperation 指定颜色如何与画布上已有颜色组合（合成） 
lineCap         指定线段端点的绘制方式 
lineJoin        指定线段连接的绘制方式 
lineWidth       绘制线段的宽度 
miterLimit      当lineJoin为miter时，这个属性指定斜连接长度和二分之一线宽的最大比率 
shadowBlur      指定阴影模糊度 
shadowColor     指定阴影颜色 
shadowOffsetX   指定阴影水平偏移值 
shadowOffsetY   指定阴影垂直偏移值 
strokeStyle     指定线段颜色。
```