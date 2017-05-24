# html中的label

Label标识有两个属性，一个是FOR，一个是ACCESSKEY。

FOR的意思是，这个Lable是为哪个控件服务的；
ACCESSKEY则定义了访问这个控件的热键。
比如，有一个名字叫Name的文本框，

    <INPUT TYPE="TEXT" ID="Name" SIZE=30>，

那么，`<label>`就可以定义成：

    <LABEL FOR="Name" ACCESSKEY="N">姓　　名（<U>N`</U>`）：`</LABEL>`。

可以看见，这个<Label>是为那个ID为“Name”控件服务的，而ACESSKEY则定义了，这访问这个控件的热键为“Alt+N”。

例子如下：
```html
<LABEL FOR="txtName" ACCESSKEY="N">姓　　名（<U>N</U>）：</LABEL>
<INPUT TYPE="TEXT" ID="txtName" SIZE=30>Meil<br>

<LABEL FOR="txtUrl" ACCESSKEY="U">个人主页（<U>U</U>）：</LABEL>
<INPUT TYPE="TEXT" ID="txtUrl" SIZE=30>http://www.livebaby.cn<br>

<LABEL FOR="txtPhonebox" ACCESSKEY="P">联系电话（<U>P</U>）：</LABEL>
<INPUT TYPE="TEXT" ID="txtPhonebox" SIZE=30> <br>

<LABEL FOR="areabox" ACCESSKEY="S" >留　　言（<U>S</U>）：</LABEL>
<TEXTAREA ID="areabox" COLS="30" ROWS="3"></TEXTAREA> 
```

单选钮、复选框、文本框都要点击控件才能选中控件，而如果使用`<label>`标识就可以实现点击文字选取。

例子如下：
```html
<div style="text-align: center">
    <p><label for="text">请在下面的文本框中输入文字：</label></p>
    <p><textarea id="text" title="text"></textarea></p>
    <p><button>形成词云</button></p>
</div>
```