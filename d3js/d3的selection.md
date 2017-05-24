# d3的选择器

文档目录：

* [选择元素和绑定数据](#select)
* [selection.call](#call)
* [selection.transition](#transition)

<h2 id="select">如何选择元素</h2>

在 D3 中，用于选择元素的函数有两个：

1. d3.select()：是选择所有指定元素的第一个
2. d3.selectAll()：是选择指定元素的全部

这两个函数返回的结果称为选择集。

例子如下：
```javascript
var body = d3.select("body"); //选择文档中的body元素
var p1 = body.select("p");      //选择body中的第一个p元素
var p = body.selectAll("p");    //选择body中的所有p元素
var svg = body.select("svg");   //选择body中的svg元素
var rects = svg.selectAll("rect");  //选择svg中所有的svg元素
```

## 如何绑定数据

D3 有一个很独特的功能：能将数据绑定到 DOM 上，也就是绑定到文档上。这么说可能不好理解，例如网页中有段落元素`<p>`和一个整数 5，于是可以将整数 5 与`<p>`绑定到一起。绑定之后，当需要依靠这个数据操作元素的时候，会很方便。

D3 中是通过以下两个函数来绑定数据的：

1. datum()：绑定一个数据到选择集上
2. data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定

## datum()

假设有一字符串 China，要将此字符串分别与三个段落元素绑定，代码如下：
```javascript
var str = "China";

var body = d3.select("body");
var p = body.selectAll("p");

p.datum(str);

p.text(function(d, i)
{
    return "第 "+ i + " 个元素绑定的数据是 " + d;
});
```

绑定数据后，使用此数据来修改三个段落元素的内容，其结果如下：
```
第 0 个元素绑定的数据是 China

第 1 个元素绑定的数据是 China

第 2 个元素绑定的数据是 China
```

在上面的代码中，用到了一个无名函数 function(d, i)。当选择集需要使用被绑定的数据时，常需要这么使用。其包含两个参数，其中：

1. d 代表数据，也就是与某元素绑定的数据。
2. i 代表索引，代表数据的索引号，从 0 开始。

例如，上述例子中：第 0 个元素 apple 绑定的数据是 China。

## data()

有一个数组，接下来要分别将数组的各元素绑定到三个段落元素上。

```javascript
var dataset = ["I like dogs","I like cats","I like snakes"];
var body = d3.select("body");
var p = body.selectAll("p");

p.data(dataset)
  .text(function(d, i){
      return d;
  });
```

此时，三个段落元素与数组 dataset 的三个字符串是一一对应的，因此，在函数 function(d, i) 直接 return d 即可。

结果自然是三个段落的文字分别变成了数组的三个字符串:

```javascript
I like dogs

I like cats

I like snakes
```

<h2 id="call">selection.call(function[, arguments…])</h2>

调用相应的function，同时传入selection和可选的arguments。
该函数结束后返回selection。

Invokes the specified function exactly once, passing in this selection along with any optional arguments. Returns this selection. This is equivalent to invoking the function by hand but facilitates method chaining. For example, to set several styles in a reusable function:

```javascript
function name(selection, first, last) {
  selection
      .attr("first-name", first)
      .attr("last-name", last);
}
```

Now say:
```javascript
d3.selectAll("div").call(name, "John", "Snow");
```
This is roughly equivalent to:
```javascript
name(d3.selectAll("div"), "John", "Snow");
```

The only difference is that selection.call always returns the selection and not the return value of the called function, name.

<h2 id="transition">selection.transition([name])</h2>

Returns a new transition on the given selection with the specified name. If a name is not specified, null is used. The new transition is only exclusive with other transitions of the same name.

If the name is a transition instance, the returned transition has the same id and name as the specified transition. If a transition with the same id already exists on a selected element, the existing transition is returned for that element. Otherwise, the timing of the returned transition is inherited from the existing transition of the same id on the nearest ancestor of each selected element. Thus, this method can be used to synchronize a transition across multiple selections, or to re-select a transition for specific elements and modify its configuration. For example:
```javascript
var t = d3.transition()
    .duration(750)
    .ease(d3.easeLinear);

d3.selectAll(".apple").transition(t)
    .style("fill", "red");

d3.selectAll(".orange").transition(t)
    .style("fill", "orange");
```

If the specified transition is not found on a selected node or its ancestors (such as if the transition already ended), the default timing parameters are used; however, in a future release, this will likely be changed to throw an error. 