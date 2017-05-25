# d3的dispatch

## d3.dispatch(types…)

创建一个事件分发器，通过types参数指定事件的名称，用于之后的事件分发和监听。

    var dispatch = d3.dispatch('start', 'end')

上述代码就创建了一个包含start事件和end事件的分发器。

## dispatch.on(type[, listener])

为指定事件添加或删除一个事件监听。

    dispatch.on('start', function() {
        ...
    })

上述代码对start事件进行监听，并执行相应的逻辑处理

    dispatch.on('start', null)

上述代码移除了start事件的监听

## dispatch.type(arguments…)

通知并将参数arguments传递个注册的监听（这里的type不是方法名，是之前注册的事件名，如start）。正常调用如下:

    diapatch.start()

arguments作为参数传递给监听函数，上下文this作为监听函数的上下文。在实际应用场景中，常常需要改变this上下文，就可以如下调用：

    selection.on('click', function(d, i) {
        <!--改变上下文为dom对象，传递对象绑定的datum和index-->
        dispatch.start.call(this, d, i)
    })