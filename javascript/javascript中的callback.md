# javascript中的callback

## callback的定义

回调是什么？

看维基的 Callback_(computer_programming) 条目:

>In computer programming, a callback is a reference to a piece of executable code that is passed as an argument to other code.

jQuery文档How jQuery Works#Callback_and_Functio…条目：

>A callback is a function that is passed as an argument to another function and is executed after its parent function has completed. The special thing about a callback is that functions that appear after the "parent" can execute before the callback executes. Another important thing to know is how to properly pass the callback. This is where I have often forgotten the proper syntax.

百科：回调函数

>回调函数就是一个通过函数指针调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用为调用它所指向的函数时，我们就说这是回调函数。回调函数不是由该函数的实现方直接调用，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。

在JavaScript中，回调函数具体的定义为：函数A作为参数(函数引用)传递到另一个函数B中，并且这个函数B执行函数A。我们就说函数A叫做回调函数。如果没有名称(函数表达式)，就叫做匿名回调函数。

例子如下：
```javascript
var func1=function(callback){
    //do something.
    (callback && typeof(callback) === "function") && callback();
}

func1(func2);
    var func2=function(){
}
```

## 回调函数的使用场合

1. 资源加载：动态加载js文件后执行回调，加载iframe后执行回调，ajax操作回调，图片加载完成执行回调，AJAX等等。

2. DOM事件及Node.js事件基于回调机制(Node.js回调可能会出现多层回调嵌套的问题)。
setTimeout的延迟时间为0，这个hack经常被用到，settimeout调用的函数其实就是一个callback的体现

3. 链式调用：链式调用的时候，在赋值器(setter)方法中(或者本身没有返回值的方法中)很容易实现链式调用，而取值器(getter)相对来说不好实现链式调用，因为你需要取值器返回你需要的数据而不是this指针，如果要实现链式方法，可以用回调函数来实现

4. setTimeout、setInterval的函数调用得到其返回值。由于两个函数都是异步的，即：他们的调用时序和程序的主流程是相对独立的，所以没有办法在主体里面等待它们的返回值，它们被打开的时候程序也不会停下来等待，否则也就失去了setTimeout及setInterval的意义了，所以用return已经没有意义，只能使用callback。callback的意义在于将timer执行的结果通知给代理函数进行及时处理。

## 回调函数的传递

上面说了，要将函数引用或者函数表达式作为参数传递。
```javascript
$.get('myhtmlpage.html', myCallBack);//这是对的
$.get('myhtmlpage.html', myCallBack('foo', 'bar'));//这是错的，那么要带参数呢？
$.get('myhtmlpage.html', function()
{//带参数的使用函数表达式
    myCallBack('foo', 'bar');
});
```
另外，最好保证回调存在且必须是函数引用或者函数表达式：

```javascript
(callback && typeof(callback) === "function") && callback();
```