# html中form的提交方式

## Submit普通提交

例子如下：
```html
<form id="myform" name="myform">  
    <table>  
        <tr>  
            <td>姓名:</td>  
            <td> <input type="text" name="name" /> </td>  
        </tr>  
        <tr>  
            <td>性别:</td>  
            <td>  
                <input type="radio" name="sex" value="1"> 男  
                <input type="radio" name="sex" value="0"> 女  
            </td>  
        </tr>  
        <tr>  
            <td>年龄:</td>  
            <td>  
                <select name="age">  
                    <option value="20">20</option>  
                    <option value="21">21</option>  
                    <option value="22">22</option>  
                </select>  
            </td>  
        </tr>  
        <tr>  
            <input type="submit" value="Submit普通提交"> 
        </tr>  
    </table>  
</form> 
```

## js提交 

```html
<form id="myform" name="myform">  
    <table>  
        <tr>  
            <td>姓名:</td>  
            <td> <input type="text" name="name" /> </td>  
        </tr>  
        <tr>  
            <td>性别:</td>  
            <td>  
                <input type="radio" name="sex" value="1"> 男  
                <input type="radio" name="sex" value="0"> 女  
            </td>  
        </tr>  
        <tr>  
            <td>年龄:</td>  
            <td>  
                <select name="age">  
                    <option value="20">20</option>  
                    <option value="21">21</option>  
                    <option value="22">22</option>  
                </select>  
            </td>  
        </tr>  
        <tr>  
            <input type="button" id="jsBtn" value="JS提交" />
        </tr>  
    </table>  
</form>  

<script>
    $(function() { 
        //js提交   
        $("#jsBtn").click(function(){     
            document.myform.submit();     
        })  
    }) 
</script>
```

## 使用onsubmit提交表单

例子如下：
```html
<!DOCTYPE html>
<meta charset="utf-8">

<style>
    #text {
        width: 60%;
        height: 100px;
    }
</style>

<form id="form" onsubmit="hello()">
    <div style="text-align: center">
        <p><label for="text">请在下面的文本框中输入文字：</label></p>
        <p><textarea id="text" title="text"></textarea></p>
        <p><button type="submit">形成词云</button></p>
    </div>
</form>

<script>
    function hello() {
        alert("hello");
    }
</script>
```