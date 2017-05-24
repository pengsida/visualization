# html中的button

`<button>` 标签定义一个按钮。

button比较重要的属性是type属性，type 属性规定了按钮的类型。

1. submit，该按钮是提交按钮，会触发表单的submit事件。
2. button，该按钮是可点击的按钮（Internet Explorer 的默认值）。
3. reset，该按钮是重置按钮（清除表单数据）。

例子如下：
```html
<form action="form_action.asp" method="get">
  First name: <input type="text" name="fname" />
  Last name: <input type="text" name="lname" />
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```