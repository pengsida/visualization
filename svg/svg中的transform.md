# svg中的transform

## SVG transform translate位移

你能把元素移动一段距离，甚至你可以根据相应的属性定位它。translate()变形方法专门效力于这个目的。

例子如下：
```javascript
<rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
```

该示例将呈现一个矩形，移到点(30,40)，而不是出现在点(0,0)。

## SVG transform rotate旋转

旋转一个元素是相当常见的任务。使用rotate()变形就可以了：
```javascript
<rect x="20" y="20" width="20" height="20" transform="rotate(45)" />
```

该示例显示了一个方形，旋转了45度。rotate()的值是用角度数指定的。