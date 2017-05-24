# d3中的sort

## array.sort

语法如下：

    arr.sort()
    arr.sort(compare)

其中compare是一个函数，常见的形式如下：
```javascript
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

对数字进行排序时，可以将其直接相减：
```javascript
function compareNumbers(a, b) {
  return a - b;
}
```