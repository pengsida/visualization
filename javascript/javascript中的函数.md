# javascript中的函数

## 自调用函数

函数表达式可以 "自调用"。

自调用表达式会自动调用。

如果表达式后面紧跟 () ，则会自动调用。

不能自调用声明的函数。

括号将一个函数声明转化成了一个表达式，解析器不再以函数声明的方式处理函数，而是作为一个函数表达式处理，也因此只有在程序执行到该函数时它才能被访问。

例子如下：

```javascript
(function () {
    var x = "Hello!!";      // 我将调用自己
})();
```

或者如下：
```javascript
(function foo(x) {
  alert(x);
})(1); // 这才是调用，不是分组操作符
```

感叹号，赋值，逻辑，甚至是逗号，各种操作符都可以告诉解析器，这个不是函数声明，它是个函数表达式。并且，对函数一元运算可以算的上是消除歧义最快的方式，感叹号只是其中之一，如果不在乎返回值，这些一元运算都是有效的：
```javascript
!function(){alert('iifksp')}()        // true
+function(){alert('iifksp')}()        // NaN
-function(){alert('iifksp')}()        // NaN
~function(){alert('iifksp')}()        // -1
```

## 箭头函数

[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)