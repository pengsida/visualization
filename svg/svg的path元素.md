# svg的path元素

path元素用语定义一个形状。

The`<path>`SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.

例子如下：
```html
<svg width="100%" height="100%" viewBox="0 0 400 400"
     xmlns="http://www.w3.org/2000/svg">

  <path d="M 100 100 L 300 100 L 200 300 z"
        fill="orange" stroke="black" stroke-width="3" />
</svg>
```

path元素的形状是通过属性d定义的，属性d的值是一个“命令+参数”的序列。

每一个命令都用一个关键字母来表示，比如，字母“M”表示的是“Move to”命令，
当解析器读到这个命令时，它就知道你是打算移动到某个点。跟在命令字母后面的，是你需要移动到的那个点的x和y轴坐标。
比如移动到(10,10)这个点的命令，应该写成“M 10 10”。这一段字符结束后，解析器就会去读下一段命令。
每一个命令都有两种表示方式，一种是用大写字母，表示采用绝对定位。
另一种是用小写字母，表示采用相对定位（例如：从上一个点开始，向上移动10px，向左移动7px）。

## 直线命令

`<path>`元素里有5个画直线的命令，顾名思义，直线命令就是在两个点之间画直线。

### 首先是“Move to”命令，M

前面已经提到过，它需要两个参数，分别是需要移动到的点的x轴和y轴的坐标。
假设，你的画笔当前位于一个点，在使用M命令移动画笔后，只会移动画笔，但不会在两点之间画线。
因为M命令仅仅是移动画笔，但不画线。所以M命令经常出现在路径的开始处，用来指明从何处开始画。

    M x y

或

    m dx dy

例子如下：
```html
<svg width="200px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10"/>

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>

</svg>
```

<svg width="200px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10"/>

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>

</svg>


能够真正画出线的命令有三个（M命令是移动画笔位置，但是不画线）

### 最常用的是“Line to”命令，L

L需要两个参数，分别是一个点的x轴和y轴坐标，L命令将会在当前位置和新位置（L前面画笔所在的点）之间画一条线段。

    L x y (or l dx dy)

另外还有两个简写命令，用来绘制平行线和垂直线。

### H，绘制平行线

### V，绘制垂直线

这两个命令都只带一个参数，标明在x轴或y轴移动到的位置，因为它们都只在坐标轴的一个方向上移动。

    H x (or h dx)
    V y (or v dy)

现在我们已经掌握了一些命令，可以开始画一些东西了。
先从简单的地方开始，画一个简单的矩形。
```html
<svg>
  
  <path d="M10 10 H 90 V 90 H 10 L 10 10"/>

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>

</svg>
```


<svg>
  
  <path d="M10 10 H 90 V 90 H 10 L 10 10"/>

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>

</svg>

### 最后，我们可以通过一个“闭合路径命令”Z来简化上面的path。

Z命令会从当前点画一条直线到路径的起点，尽管我们不总是需要闭合路径，但是它还是经常被放到路径的最后。另外，Z命令不用区分大小写。

    Z (or z)

所以上面例子里用到的路径，可以简化成这样：
```html
<path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

<svg>
<path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
</svg>

你也可以使用这些命令的相对坐标形式来绘制相同的图形，
如之前所述，相对命令使用的是小写字母，它们的参数不是指定一个明确的坐标，
而是表示相对于它前面的点需要移动多少距离。例如前面的示例，画的是一个80*80的正方形，用相对命令可以这样描述：
```html
<path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

<svg>
<path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
</svg>

上述路径是：画笔移动到(10,10)点，由此开始，向右移动80像素构成一条水平线，然后向下移动80像素，然后向左移动80像素，然后再回到起点。