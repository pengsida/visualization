# javascript中的对象引用

## 引用类型

javascript中除了上面的基本类型(number,string,boolean,null,undefined)之外就是引用类型了，也可以说是就是对象了。

对象是属性和方法的集合。也就是说引用类型可以拥有属性和方法，属性又可以包含基本类型和引用类型。来看看引用类型的一些特性：

### 1.引用类型的值是同时保存在栈内存和堆内存中的对象

javascript和其他语言不同，其不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。 

javascript操作对象的引用，所以引用类型的值是按引用访问的。

准确地说，引用类型的存储需要内存的栈区和堆区（堆区是指内存里的堆内存）共同完成：

    栈区内存保存变量标识符和指向堆内存中该对象的指针，也可以说是该对象在堆内存的地址。

### 2.引用类型的比较是引用的比较

```javascript
var person1 = {};
var person2 = {};
console.log(person1 == person2); // false
```

引用类型是按引用访问的，换句话说就是比较两个对象的堆内存中的地址是否相同，那很明显，person1和person2在堆内存中地址是不同的

所以这两个是完全不同的对象，所以返回false。

## 对象引用

当从一个变量向另一个变量赋值引用类型的值时，同样也会将存储在变量中的对象的值复制一份放到为新变量分配的空间中。

前面讲引用类型的时候提到，保存在变量中的是对象在堆内存中的地址，所以，与简单赋值不同，这个值的副本实际上是一个指针，而这个指针指向存储在堆内存的一个对象。

那么赋值操作后，两个变量都保存了同一个对象地址，则这两个变量指向了同一个对象。因此，改变其中任何一个变量，都会相互影响：

```javascript
var a = {}; // a保存了一个空对象的实例
var b = a;  // a和b都指向了这个空对象

a.name = 'jozo';
console.log(a.name); // 'jozo'
console.log(b.name); // 'jozo'

b.age = 22;
console.log(b.age);// 22
console.log(a.age);// 22

console.log(a == b);// true
```

## 当对象引用做为函数参数传递时候，依然会相互影响

如下示例：
```javascript
var data = {a:1,b:2,c:3,d:{q:4,w:5,e:6}};
var data1 = data;
function con(data2){
data2["r"] = 5;
console.log(JSON.stringify(data2));
}
con(data1);
console.log(JSON.stringify(data));

// 输出结果：
// {"a":1,"b":2,"c":3,"d":{"q":4,"w":5,"e":6},"r":5}
// {"a":1,"b":2,"c":3,"d":{"q":4,"w":5,"e":6},"r":5}
```

