# 在html中使用svg

测试网站：[http://www.runoob.com/try/try.php?filename=tryhtml5_svg_ex](http://www.runoob.com/try/try.php?filename=tryhtml5_svg_ex)

## g元素

>The `<g>` SVG element is a container used to group other SVG elements. 
>
>Transformations applied to the `<g>` element are performed on all of its child elements, and any of its attributes are inherited by its child elements. 
>
>It can also group multiple elements to be referenced later with the `<use>` element.

例子如下：

```html
<svg viewBox="0 0 95 50"
     xmlns="http://www.w3.org/2000/svg">
   <g stroke="green" fill="white" stroke-width="5">
     <circle cx="25" cy="25" r="15"/>
     <circle cx="40" cy="25" r="15"/>
     <circle cx="55" cy="25" r="15"/>
     <circle cx="70" cy="25" r="15"/>
   </g>
</svg>
```

