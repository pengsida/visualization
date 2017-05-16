# 在html中使用javascript

## html内部的javascript脚本

HTML 中的脚本必须位于 `<script>` 与 `</script>` 标签之间。
脚本可被放置在 HTML 页面的 `<body>` 和 `<head>` 部分中。

例子如下：
```javascript
<!DOCTYPE html>
<html>
<body>
.
.
<script>
document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph</p>");
</script>
.
.
</body>
</html>
```

## 外部的 JavaScript

也可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码。

外部 JavaScript 文件的文件扩展名是 .js。

如需使用外部文件，请在 <script> 标签的 "src" 属性中设置该 .js 文件：

例子如下：
```javascript
<!DOCTYPE html>
<html>
<body>
<script src="myScript.js"></script>
</body>
</html>
```