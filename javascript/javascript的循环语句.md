# javascript的循环语句

JavaScript 支持不同类型的循环：

- for - 循环代码块一定的次数
- for/in - 循环遍历对象的属性
- while - 当指定的条件为 true 时循环指定的代码块
- do/while - 同样当指定的条件为 true 时循环指定的代码块

## For 循环
for 循环是您在希望创建循环时常会用到的工具。
下面是 for 循环的语法：

```javascript
for (语句 1; 语句 2; 语句 3)
{
    被执行的代码块
}
```

- 语句 1 在循环（代码块）开始前执行
- 语句 2 定义运行循环（代码块）的条件
- 语句 3 在循环（代码块）已被执行之后执行

实例
```javascript
for (var i=0; i<5; i++)
{
    x=x + "The number is " + i + "<br>";
}
```

## For/In 循环
JavaScript for/in 语句循环遍历对象的属性：

实例
```javascript
var person={fname:"John",lname:"Doe",age:25};

for (x in person)
{
    txt=txt + person[x];
}
```

## forEach

```javascript
<script>  
var arryAll = [];  
arryAll.push(1);  
arryAll.push(2);  
arryAll.push(3);  
arryAll.push(4);  
  
arryAll.forEach(function(e){  
    alert(e);  
});
</script>
```

## while 循环

While 循环会在指定条件为真时循环执行代码块。

语法
```javascript
while (条件)
{
    需要执行的代码
}
```

实例，
本例中的循环将继续运行，只要变量 i 小于 5：
```javascript
while (i<5)
{
  x=x + "The number is " + i + "<br>";
  i++;
}
```

## do/while 循环

do/while 循环是 while 循环的变体。该循环会执行一次代码块，在检查条件是否为真之前，然后如果条件为真的话，就会重复这个循环。
语法
```javascript
do
{
    需要执行的代码
}
while (条件);
```

下面的例子使用 do/while 循环。该循环至少会执行一次，即使条件是 false，隐藏代码块会在条件被测试前执行：

```javascript
do
{
    x=x + "The number is " + i + "<br>";
    i++;
}
while (i<5);
```