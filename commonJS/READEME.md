# commonJS规范

导入导出模块的方式

## 导出方式

1. 使用`exports`对象导出模块
   exports实质上是node全局的module上的一个属性,它是一个对象。既然是一个js对象，我们就可以在它身上挂载属性和方法。
   可以这样去挂载

```javascript
exports.name = '张三'
exprots.add = function (a, b) {
    return a + b
}
```

2. 使用`module.exports`导出模块
   这种方式导出模块其实本质上是和上面的方式一样的，只不过是一个写法的不同而已。

```javascript
module.exports = {
    name: '张三',
    add: function (a, b) {
        return a + b
    }
}
```

一般我们现在一个文件里面编写好了各种函数、代码、对象等等，最后使用`module.exports`导出模块。

```javascript
function add(a, b) {
    return a + b
}

const zhangsan = {
    name: '张三',
    age: 18,
    gender: '男'
}
const globalCounter = 0

module.exports = {
    add,
    zhangsan,
    globalCounter
}
```

## 导入方式

通过`require`函数导入模块

```javascript
const module = require('/filepath/.../filename.js')
```

当一个模块，比如写了一个工具函数模块，这个工具函数模块里面有非常的多的函数，我们只需要其中的一个函数，那么我们可以这样导入

```javascript
const {add} = require('/filepath/.../utils.js')
```

# 变量哪里来？

在node环境下，每一个文件会被视作一个独立的模块，每个模块都会有自己的作用域。
node.js会这个模块进行一个封装，把它封装到一个函数里面，也就是把我们每个模块里面的代码全都放到了一个函数里面，
这个函数带有5个参数，分别是`exports`、`require`、`module`、`__filename`、`__dirname`。
所以我们能在文件里面使用这些变量，是因为node.js帮我们传递了这些参数。

- 一个示例js文件

```javascript
console.log("hello")
console.log("node.js")
console.log(__dirname)
```

- 它会被node.js封装成这样

```javascript
(function (exports, require, module, __filename, __dirname) {
    console.log("hello")
    console.log("node.js")
    console.log(__dirname)
})
```

# require循环引用，执行机制
在node.js中，require是同步加载的，当一个模块被引入的时候，会先执行这个模块的代码，然后再引入其他模块。


## node.js模块加载缓存机制
1. 首次加载：当一个模块第一次被 `require` 时，Node.js 会执行该模块的代码，并将其导出的内容缓存起来。
2. 缓存存储：缓存存储在require.cache对象中，该对象的键是模块的绝对路径，值是模块的导出对象。
3. 再次加载：当再次 `require` 一个模块时，Node.js 会首先检查该模块是否已经被加载过，如果是，则直接从缓存中取出该模块的导出对象，否则，Node.js 会再次执行该模块的代码，并将其导出的内容缓存起来。


简单分析一下循环引用的过程。
```shell
node main.js
```
循环引用代码：
```javascript
// main.js
const a = require('./a');
console.log('in main, a.a1 = %j, a.a2 = %j', a.a1, a.a2);

// a.js
exports.a1 = true;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.a2 = true;

// b.js
const a = require('./a.js');
console.log('in b, a.a1 = %j, a.a2 = %j', a.a1, a.a2);
```

1. 入口文件main.js中导入了模块`a`,这个时候会执行a.js文件，a1的值被设置为true了，然后又导入了模块`b`。
2. 开始执行b.js文件，导入了模块`a`，这个时候a.js文件已经被执行过了(node会到缓存里面去找)，所以不会再次执行，直接从缓存中取出a.js文件的导出对象，这个时候a1的值是true，a2的值还没有被设置，所以a2的值是undefined。
3. b文件打印出`in b, a.a1 = true, a.a2 = undefined`。
4. 回去继续执行a.js文件，由于b.done没有这个值，所以a文件的第三行的输出会是`in a, b.done = undefined`。
5. a文件的最后一行设置了a2的值为true。
6. 回到main.js文件，打印出`in main, a.a1 = true, a.a2 = true`。