# html中的div

div元素用于组织和结构化文档，并经常联合class和id属性一起使用。
它的两个用途如下：
1. `<div>` 元素可用于对大的内容块设置样式属性
2. `<div>` 元素的另一个常见的用途是文档布局

## div设置样式属性

例子如下：
```html
<div id="democrats">
<ul>
<li>富兰克林·D·罗斯福</li>
<li>哈利·S·杜鲁门</li>
<li>约翰·F·肯尼迪</li>
<li>林登·B·约翰逊</li>
<li>吉米·卡特</li>
<li>比尔·克林顿</li>
</ul>
</div>

<div id="republicans">
<ul>
<li>德怀特·D·艾森豪威尔</li>
<li>理查德·尼克松</li>
<li>杰拉尔德·福特</li>
<li>罗纳德·里根</li>
<li>乔治·布什</li>
<li>乔治·W·布什</li>
</ul>
</div>
```

其中css设置为：
```css
#democrats {
    background:blue;
}

#republicans {
    background:red;
}
```

## div设置布局

例子如下：
```html
<body>

<div id="header">
<h1>City Gallery</h1>
</div>

<div id="nav">
London<br>
Paris<br>
Tokyo<br>
</div>

<div id="section">
<h1>London</h1>
<p>
London is the capital city of England. It is the most populous city in the United Kingdom,
with a metropolitan area of over 13 million inhabitants.
</p>
<p>
Standing on the River Thames, London has been a major settlement for two millennia,
its history going back to its founding by the Romans, who named it Londinium.
</p>
</div>

<div id="footer">
Copyright W3School.com.cn
</div>

</body>
```

其中css设置为：
```css
<style>
#header {
    background-color:black;
    color:white;
    text-align:center;
    padding:5px;
}
#nav {
    line-height:30px;
    background-color:#eeeeee;
    height:300px;
    width:100px;
    float:left;
    padding:5px; 
}
#section {
    width:350px;
    float:left;
    padding:10px; 
}
#footer {
    background-color:black;
    color:white;
    clear:both;
    text-align:center;
    padding:5px; 
}
</style>
```