# d3.rebind(target, source, names…)

将一个对象的方法绑定到另一个对象上。

将名称在names中的方法(method)从指定的参数source拷贝到target，并返回target。

当调用target，将相当于调用函数source。注意，传递到target的参数，将传递到source中。target使用source作为this的上下文。

上面说的可能比较抽象，可以通过下面的例子来认知：
```javascript
var dispatch = d3.dispatch("word", "end"); // dispatch自己有一个on方法
target = {};
d3.rebind(target, dispatch, "on"); // 将dispatch的on方法拷贝给了target，这样target也有了一个on方法
```

如果source返回了source对象，那么相应的target将会返回target对象。否则，target返回source返回的值。方法rebind 允许继承的方法绑定到一个不同对象的子类。