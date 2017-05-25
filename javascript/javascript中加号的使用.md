# javascript中加号的使用

例子如下：
```javascript
// 16进制转换:
+”0xFF”;              // -> 255
// 获取当前的时间戳,相当于`new Date().getTime()`:
+new Date();
// 比 parseFloat()/parseInt()更加安全的解析字符串
parseInt(“1,000″);    // -> 1, not 1000
+”1,000″;             // -> NaN, much better for testing user input
parseInt(“010″);      // -> 8, because of the octal literal prefix
+”010″;               // -> 10, `Number()` doesn't parse octal literals
//一些简单的缩写比如： if (someVar === null) {someVar = 0};
+null;                // -> 0;
// 布尔型转换为整型
+true;                // -> 1;
+false;               // -> 0;
//其他:
+”1e10″;              // -> 10000000000
+”1e-4″;              // -> 0.0001
+”-12″;               // -> -12：
// 数字加空字符串的操作就可以将数字转化为字符串
alert( typeof (1+””)); // ->string；
// 将字符串转化为数字的减操作符 
alert( typeof (“123″-0));//->number；
```