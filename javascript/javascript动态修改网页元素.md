# javascript动态修改网页元素

## 向网页中添加元素

如需向 HTML DOM 添加新元素，您必须首先创建该元素（元素节点），然后向一个已存在的元素追加该元素。

例子如下：
```html
<div id="div1">
<p id="p1">这是一个段落</p>
<p id="p2">这是另一个段落</p>
</div>

<script>
var para=document.createElement("p");
var node=document.createTextNode("这是新段落。");
para.appendChild(node);

var element=document.getElementById("div1");
element.appendChild(para);
</script>
```

例子解释：
这段代码创建新的`<p>`元素：
```javascript
var para=document.createElement("p");
```

如需向`<p>`元素添加文本，您必须首先创建文本节点。这段代码创建了一个文本节点：
```javascript
var node=document.createTextNode("这是新段落。");
```

然后您必须向`<p>`元素追加这个文本节点：

```javascript
para.appendChild(node);
```

最后您必须向一个已有的元素追加这个新元素。
这段代码找到一个已有的元素：
```javascript
var element=document.getElementById("div1");
```

这段代码向这个已有的元素追加新元素：
```javascript
element.appendChild(para);
```

## 修改元素的属性

语法如下：
```javascript
// 第一种方法
document.getElementById(id).attribute=new value

// 第二种方法
Element.setAttribute(name, value);
```

例子如下：

```javascript
<!DOCTYPE html>
<html>
<body>

<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src="landscape.jpg";
document.getElementById("image").setAttribute("src", "landscape.jpg");
</script>

</body>
</html>
```