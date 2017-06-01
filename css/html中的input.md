# html中的input

文档目录：
- [html中的输入框](#text)
- [html中的单选按钮](#radio)

## html中的输入框

例子如下：
```html
<!DOCTYPE html>
<html>
<body>

<form action="action_page.php">
First name:<br>
<input type="text" name="firstname" value="Mickey">
<br>
Last name:<br>
<input type="text" name="lastname" value="Mouse">
<br><br>
<input type="submit" value="Submit">
</form> 

<p>If you click "Submit", the form-data will be sent to a page called "action_page.php".</p>

</body>
</html>
```

## html中的单选按钮

例子如下：
```html
<html>

<body>

<form>
男性：
<input type="radio" checked="checked" name="Sex" value="male" />
<br />
女性：
<input type="radio" name="Sex" value="female" />
</form>

<p>当用户点击一个单选按钮时，该按钮会变为选中状态，其他所有按钮会变为非选中状态。</p>

</body>
</html>
```