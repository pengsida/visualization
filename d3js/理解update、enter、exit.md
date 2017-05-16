# 理解update、enter、exit

假设，在 body 中有三个 p 元素，有一数组 [3, 6, 9]，则可以将数组中的每一项分别与一个 p 元素绑定在一起。但是，有一个问题：当数组的长度与元素数量不一致（数组长度 > 元素数量 or 数组长度 < 元素数量）时呢？这时候就需要理解 Update、Enter、Exit 的概念。

如果数组为 [3, 6, 9, 12, 15]，将此数组绑定到三个 p 元素的选择集上。可以想象，会有两个数据没有元素与之对应，这时候 D3 会建立两个空的元素与数据对应，这一部分就称为 Enter。而有元素与数据对应的部分称为 Update。如果数组为 [3]，则会有两个元素没有数据绑定，那么没有数据绑定的部分被称为 Exit。示意图如下所示:

<center><img src=""/></center>

## Update 和 Enter 的使用

当对应的元素不足时 （ 绑定数据数量 > 对应元素 ），需要添加元素（append）。

现在 body 中有三个 p 元素，要绑定一个长度大于 3 的数组到 p 的选择集上，然后分别处理 update 和 enter 两部分。

```javascript
var dataset = [ 3 , 6 , 9 , 12 , 15 ];

//选择body中的p元素
var p = d3.select("body").selectAll("p");

//获取update部分
var update = p.data(dataset);

//获取enter部分
var enter = update.enter();

//update部分的处理：更新属性值
update.text(function(d){
    return "update " + d;
});

//enter部分的处理：添加元素后赋予属性值
enter.append("p")
    .text(function(d){
        return "enter " + d;
    });
```

结果如下，update 部分和 enter 部分被绑定的数据很清晰地表示了出来:
```
update 3

update 6

update 9

enter 12

enter 15
```
请大家记住：

1. update 部分的处理办法一般是：更新属性值
2. enter 部分的处理办法一般是：添加元素后，赋予属性值

## Update 和 Exit 的使用

当对应的元素过多时 （ 绑定数据数量 < 对应元素 ），需要删掉多余的元素。

现在 body 中有三个 p 元素，要绑定一个长度小于 3 的数组到 p 的选择集上，然后分别处理 update 和 exit 两部分。

```javascript
var dataset = [ 3 ];

//选择body中的p元素
var p = d3.select("body").selectAll("p");

//获取update部分
var update = p.data(dataset);

//获取exit部分
var exit = update.exit();

//update部分的处理：更新属性值
update.text(function(d){
    return "update " + d;
});

//exit部分的处理：修改p元素的属性
exit.text(function(d){
        return "exit";
    });

//exit部分的处理通常是删除元素
// exit.remove();
```

结果如下，请大家区分好 update 部分和 exit 部分。这里为了表明哪一部分是 exit，并没有删除掉多余的元素，但实际上 exit 部分的绝大部分操作是删除:

```
update 3

exit

exit
```

请大家记住：

1. exit 部分的处理办法一般是：删除元素（remove）