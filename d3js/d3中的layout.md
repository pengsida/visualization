# d3中的layout

d3中的layout不是要直接绘图而是获取绘图所需数据。

文档目录：
* [Bundle](#bundle)
* [Chord](#chord)
* [Cluster](#cluster)
* [Force](#force)
* [Hierarchy](#hierarchy)
* [Histogram](#histogram)
* [Pack](#pack)
* [Partition](#partition)
* [Pie](#pie)
* [Stack](#stack)
* [Tree](#tree)
* [Treemap](#treemap)

## Bundle

```
d3.layout.bundle - 构造一个新的捆图布局
bundle - 应用霍顿的边缘捆绑算法
```

## 弦图(Chord)

```
d3.layout.chord - 初始化一个弦图对象, 返回一个 Chord 实例

chord.matrix - 设置或者获取弦图实例对应的矩阵数据

chord.padding - 设置或获取弦图各段圆弧之间的间隔角度

chord.sortGroups - 设置或获取矩阵分组的排序函数

chord.sortSubgroups - 设置或获取矩阵二级分组的排序函数

chord.sortChords - 设置或获取弦图在z序上的排序函数(决定哪一组显示在最上层)

chord.chords - 该函数会将参数处理成对 chord 更友好的格式并返回, 若没有提供参数, 会调用matrix()来获取数据

chord.groups - 该函数参数处理成更易于理解的分组信息, 若没有提供参数, 会调用matrix()来获取数据
```

## 集群(Cluster)

```
d3.layout.cluster - 用默认设置生成一个集群布局对象.

cluster.sort - 获取或设置一个函数, 用来给兄弟节点(同一父结点的子结点)的排序.

cluster.children - 获取或设置子结点的访问器.

cluster.nodes - 计算并返回指定结点的子结点在集群中的信息(坐标,深度等).

cluster.links - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.

cluster.separation - 获取或设置相邻结点间的间隔(不仅限于兄弟结点).

cluster.size - 获取或设置布局的 *宽* 和 *高* 的大小.

cluster.nodeSize - 为结点指定大小.
```

## 力学(Force)

```
d3.layout.force -节点（node）基于物理模拟的位置连接。

force.on - 监听布局位置的变化。(仅支持"start","step","end"三种事件)

force.nodes - 获得或设置布局中的节点（node）阵列组。

force.links - 获得或设置布局中节点间的连接（Link）阵列组。.

force.size - 获取或设置布局的 *宽* 和 *高* 的大小.

force.linkDistance - 获取或设置节点间的连接线距离.

force.linkStrength - 获取或设置节点间的连接强度.

force.friction - 获取或设置摩擦系数.

force.charge - 获取或设置节点的电荷数.(电荷数决定结点是互相排斥还是吸引)

force.gravity - 获取或设置节点的引力强度.

force.theta - 获取或设置电荷间互相作用的强度.

force.start - 开启或恢复结点间的位置影响.

force.resume - 设置冷却系数为0.1,并重新调用start()函数.

force.stop - 立刻终止结点间的位置影响.(等同于将*冷却系数*设置为0)

force.alpha - 获取或设置布局的冷却系数.(冷却系数为0时,节点间不再互相影响)

force.tick - 让布局运行到下一步.

force.drag - 获取当前布局的拖拽对象实例以便进一步绑定处理函数.
```

## 层级布局(Hierarchy)

```
d3.layout.hierarchy - 获得一个自定义的层级布局的实现.

hierarchy.sort - 获取或设置一个函数, 用来给兄弟节点(同一父结点的子结点)的排序.

hierarchy.children - 获取或设置子结点的访问器.

hierarchy.nodes - 计算并返回指定结点的子结点信息.

hierarchy.links - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.

hierarchy.value - 获取或设置结点的**值**访问器.

hierarchy.revalue - 重新计算层级布局.
```

## 直方图(Histogram)

```
d3.layout.histogram - 构建一个默认直方图(用来表示一组离散数字的分布,横轴表示区间,纵轴表示区间内样本数量或样本百分比).

histogram.value - 获取或设置值访问器.

histogram.range - 获取或设置合法值范围.

histogram.bins - 指定如何将数据分组到不同的区间(bin)里, 返回一个构造函数

histogram - 根据已设置的区间将数据分组,返回已分组的二维数组).

histogram.frequency - 设置直方图Y轴值是区间内数据的总量还是百分比
```

## 层包(Pack)

```
d3.layout.pack - 用递归的圆环表现一个多层级布局.

pack.sort - 获取或设置一个函数, 用来给兄弟节点(同一父结点的子结点)排序.

pack.children - 获取或设置子结点的访问器.

pack.nodes - 计算并返回指定结点的子结点信息.

pack.links - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.

pack.value - 获取或设置一个函数, 用来计算圆环的大小(近似值).

pack.size - 设置整个布局画布的 *宽* and *高*.

pack.radius - 如果不想结点半径与结点的值相同, 可以传入一个函数用来计算结点半径.

pack.padding - 指定相邻结点之点的间距(近似值).
```

## 分区(Partition)

```
d3.layout.partition - 将一棵树递归的分区.

partition.sort - 获取或设置一个函数, 用来给兄弟节点(同一父结点的子结点)排序.

partition.children - 获取或设置子结点的访问器.

partition.nodes - 计算并返回指定结点的子结点信息.

partition.links - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.

partition.value - 设置一个函数来来计算分区的值.

partition.size - 设置整个布局画布的 *宽* and *高*.
```

## 饼图(pie)

```
d3.layout.pie - 构建一个默认的饼图.

pie - 该函数将传入的原始参数转换成可用于饼图或者环形图的数据结构.

pie.value - 获取或设置值访问器.

pie.sort - 设置饼图顺时针方向的排序方法.

pie.startAngle - 设置或获取整个饼图的起始角度.

pie.endAngle - 设置或获取整个饼图的终止角度.
```

## 堆叠图(Stack)

```
d3.layout.stack - 构建一个默认的堆叠图(用来展示一系列x轴相同的面积图或者立方图).

stack - 计算每一层的基线.

stack.values - 设置或者获取每层的值访问器.

stack.order - 设置每层的排序.

stack.offset - 指定总的基线算法.

stack.x - 设置或获取每层的x轴访问器.

stack.y - 设置或获取每层的y轴访问器.

stack.out - 设置或获取用来储存基线的输出函数.
```

## 树(Tree)

```
d3.layout.tree - position a tree of nodes tidily.

tree.sort - 设置或获取一个函数, 用来给兄弟节点(同一父结点的子结点)排序.

tree.children - 设置或获取子结点的访问器.

tree.nodes - 计算并返回指定结点的子结点信息.

tree.links - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.

tree.separation - 设置或获取相隔结点之间的间隔计算函数.

tree.size - 指定整个布局的宽和高.

tree.nodeSize - 给全部结点指定一个固定的大小(会导致`tree.size`失效)
```

## 矩阵树(Treemap)

```
d3.layout.treemap - 返回一个矩阵树对象(用矩阵来展示一颗树).

treemap.sort - 设置或获取一个函数, 用来给兄弟节点(同一父结点的子结点)排序.

treemap.children - 设置或获取子结点的访问器.

treemap.nodes - 计算并返回指定结点的子结点信息.

treemap.links - 指定一个子结点数组(通常是**nodes**函数返回值), 计算它们与父结点的连接信息.

treemap.value- 设置或获取一个用来计算单元格大小的值访问器.

treemap.size - 指定整个布局的宽和高.

treemap.padding - 指定父结点和子结点的间距.

treemap.round - 禁用或启用边界补偿.

treemap.sticky - 让布局更"粘"以保证在更新数据时有平滑的动画效果.

treemap.mode - 更改矩阵树的布局算法.
```