# d3.functor(value)

如果参数value 是个函数，返回这个函数。否则，返回一个能够输出这个参数的函数变量。

该方法用来将常量参数升级转换成函数，以备需要指定属性为常量或者函数的时候，直接实现。比如：许多D3 layouts需要指定属性成这种格式，当我们自动转换值到函数的时候，这样可以简化实现。

例子如下：
```javascript
var k = {};
k.text = function(t){
    k.word = d3.functor(t);
    return k;
}

k.text("hello"); // 使用常量参数
k.text(function(){  // 使用函数参数
    return "hello";
})
```