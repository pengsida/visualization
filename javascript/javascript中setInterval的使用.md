# javascript中setInterval的使用

## 执行setInterval()

window.setInterval()方法，周期性地调用一个函数(function)或者执行一段代码。
语法如下：
```javascript
var intervalID = window.setInterval(func, delay[, param1, param2, ...]); 
var intervalID = window.setInterval(code, delay);
```

例子如下：
```javascript
setInterval(function(){
    console.log("log")
},1000)
```

## 取消setInterval设置的重复性动作

window.clearInterval() 取消掉用setInterval设置的重复执行动作，语法如下：
```javascript
window.clearInterval(intervalID)
```

其中intervalID是你想要取消的重复动作的ID,这个ID是个整数,是由setInterval()返回的。 

例子：
```javascript
var pageTimer = {} ; //定义计算器全局变量
//赋值模拟
pageTimer["timer1"] = setInterval(function(){},2000);
pageTimer["timer2"] = setInterval(function(){},2000);
//全部清除方法
for(var each in pageTimer){
    clearInterval(pageTimer[each]);
}
```