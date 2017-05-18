# javascript字符串操作

文档目录：
* [字符串相加](#add)
* [字符串相减](#subtract)

<h2 id="add">字符串相加</h2>

用一个"+"就可以将两个字符串相加。

<h2 id="subtract">字符串相减</h2>

使用replace()函数实现，replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
语法如下

    stringObject.replace(regexp/substr,replacement)

    返回值
    一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。

实现如下：
```javascript
<script type="text/javascript">

var str="Visit Microsoft!"
document.write(str.replace(/Microsoft/, ""))

</script>
```

输出：
    
    Visit !