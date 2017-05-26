# html中的canvas元素

API手册网址为：[http://www.w3school.com.cn/tags/html_ref_canvas.asp](http://www.w3school.com.cn/tags/html_ref_canvas.asp)

## 获得canvas对象

getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。

例子如下：
```javascript
var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
```
