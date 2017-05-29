# data函数的key参数

参考网站：
1. [http://blog.ladyrick.com/2017/05/16/d3-01-data/](http://blog.ladyrick.com/2017/05/16/d3-01-data/)
2. [https://segmentfault.com/a/1190000000428592](https://segmentfault.com/a/1190000000428592)
3. [http://www.ourd3js.com/wordpress/811/#more-811](http://www.ourd3js.com/wordpress/811/#more-811)

API中说了：

>If a key function is not specified, then the first datum in data is assigned to the first selected element, the second datum to the second selected element, and so on. 
>
>A key function may be specified to control which datum is assigned to which element, replacing the default join-by-index. 
>
>This key function is evaluated for each selected element, in order, being passed the current datum (d), the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). The key function is then also evaluated for each new datum in data, being passed the current datum (d), the current index (i), and the group’s new data, with this as the group’s parent DOM element. The datum for a given key is assigned to the element with the matching key. 
>
>If multiple elements have the same key, the duplicate elements are put into the exit selection; if multiple data have the same key, the duplicate data are put into the enter selection.

上面一大段英文可以理解为，key function为页面元素和data之间建立了一个映射关系。

默认的情况下，data()函数是按照索引号依次绑定数组各项的。
第0个元素绑定数组的第0项，第1个元素绑定数组的第1项，依此类推。
也可以不按照此顺序进行绑定，这就要用到data()的第二个参数key function。

## 第一个例子

key function中将页面元素与data按一定的键值绑定后，
页面元素将按照键值排序。

### 首先不使用key function

```html
<body>
<!-- 三个空的p元素 -->
    <p></p>
    <p></p>
    <p></p>
    <script>
    //数据
    var persons = [	{ id: 3 , name:"张三" },
                    { id: 6 , name:"李四" },
                    { id: 9 , name:"王五" }];

    //选择body中的所有的p元素
    var p = d3.select("body").selectAll("p");

    //绑定数据，并修改p元素的内容
    p.data(persons)
        .text(function(d){
            return d.id + " : " + d.name;
        });
    </script>
</body>
```

这段代码对p元素的内容进行了修改，修改之后的p元素为：
```html
<p>3 : 张三</p>
<p>6 : 李四</p>
<p>9 : 王五</p>
```

### 然后使用key function

```javascript
//更新persons里的数据
persons = [ { id: 6 , name:"张三" },
            { id: 9 , name:"李四" },
            { id: 3 , name:"王五" }];

//根据键函数的规则绑定数据，并修改内容
p.data(persons, function(d){ return d.id; })
        .text(function(d){
            return d.id + " : " + d.name;
        });
```

键函数里只有一个语句return d.id。表示使用数组项的id属性作为键。
使用本次绑定的数据修改p元素的内容后，结果如下：

```html
<p>3 : 王五</p>
<p>6 : 张三</p>
<p>9 : 李四</p>
```

可以看到，结果并没有按照新persons数组的次序（6：张三、9：李四、3：王五）排列。
绑定的顺序不按照索引号绑定，而是使键值依次对应。

## 第二个例子

key function中将页面元素和data用键值绑定后，
通过data寻找页面元素时，将根据键值获得相应的元素。

首先我们创建三个小蓝条：
```html
<style>
div {
    margin: 10px 10px;
    height: 20px;
    background: #0055ff;
}
</style>

<script>
var dataset = [1, 2, 3];
var divs = d3.select("body")
        .selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .style("width", function (d) {
            return d * 100 + "px";
        });
</script>
```

### 首先不使用key function

```javascript
function change() {
    dataset = [3];
    divs.data(dataset)
        .exit()
        .remove();
}
setTimeout(change, 2000)
```

这里因为没有使用key function，所以data()函数是按照索引号依次绑定数组各项的。
这样dataset就绑定到了第一个元素，而其他元素没有绑定到，也就被放进了exit选择器中，被remove()函数删除。
也就留下了第一个小蓝条。

## 然后使用key function

```javascript
function change() {
    dataset = [3];
    divs.data(dataset, function(d) {
        return d;
    })
    .exit()
    .remove();
}
setTimeout(change, 2000);
```

这里使用了key function，dataset根据它的值找到了相应的元素，其他的元素被remove()函数删除。
也就留下了第三个小蓝条。