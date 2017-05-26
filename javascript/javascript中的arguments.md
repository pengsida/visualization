# javascript中的arguments

arguments 是一个类似数组的对象, 对应于传递给函数的参数。

arguments对象是函数中所有可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。此对象包含传递给函数的每个参数的条目，第一个条目的索引从0开始。例如，如果一个函数传递了三个参数，你可以参考它们如下：

    arguments[0]
    arguments[1]
    arguments[2]

也可以获得它的长度：

    arguments.length