# javascript中的正则表达式

RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。

直接量语法
    
    /pattern/attributes

创建 RegExp 对象的语法：
    
    new RegExp(pattern, attributes);

参数

1. 参数 pattern 是一个字符串，指定了正则表达式的模式或其他正则表达式。
2. 参数 attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、不区分大小写的匹配和多行匹配。

## 元字符：
```
\n	查找换行符。
\f	查找换页符。
\r	查找回车符。
\t	查找制表符。
\v	查找垂直制表符。
```

## test方法

test() 方法用于检测一个字符串是否匹配某个模式.

例子如下：
```javascript
<script type="text/javascript">
var str = "Visit W3School";
var patt1 = new RegExp("W3School");

var result = patt1.test(str);

document.write("Result: " + result);
</script>
```

## ^n

匹配任何开头为 n 的字符串。