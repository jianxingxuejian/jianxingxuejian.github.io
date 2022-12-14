---
title: 如何定义一个函数
date: 2022-09-17
wordCount: 1500
tags: [js, ts]
---

# 如何定义一个函数

MDN 关于函数的定义与使用 [js 指南-函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions) [js 参考-函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions) [js 参考-函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)

```javascript
// 函数声明
function square(value) {
  return value * value
}
// 函数表达式的具名函数形式
const square = function square(value) {
  return value * value
}
// 函数表达式的匿名函数形式
const square = function (value) {
  return value * value
}
// 函数表达式的箭头函数形式
const square = value => {
  return value * value
}
// 只有一条语句时可省略花括号和return
const square = value => value * value
```

如上所示，定义函数有两种方式，用 function 关键词声明的叫函数声明(**function definition**/**function declaration**/**function statement**)，函数赋予给变量的叫函数表达式(**function expression**)。

它们有如下区别：

函数声明存在**函数提升(Function hoisting)**，因此可以先使用，后声明，而函数表达式则不行。

```javascript
test() // 可以直接调用函数
function test() {
  console.log('test')
}

const test = () => console.log('test')
test() // 只能先声明再调用
```

某些场景下函数表达式更加灵活。

```javascript
let test
if (flag) {
  test = x => {
    const value = 10
    return x * value
  }
} else {
  test = x => {
    const value = 20
    return x * value
  }
}
test(10)
```

除次之外，两种声明方式是完全等价的。

由于两种声明方式有差别，因此网上经常能看到相关的讨论(斗争)，甚至有的公司规定定义函数必须使用函数声明，有的公司规定必须使用函数表达式，两个派别都认为自己的做法才是函数定义的最佳实践。

函数声明派的观点：函数就应该被提升至作用域的顶部；相比箭头函数形式的函数表达式，函数声明更加简洁。

函数表达式派的观点：函数就应该先定义然后使用，遵循从上至下的原则，避免隐形 bug。

大部分函数表达式派都是使用箭头函数形式，而 airbnb 的 js 风格指南则是推荐使用具名函数形式，因为错误调用堆栈中的匿名函数可能难以追踪 [地址](https://github.com/airbnb/javascript#functions)

```javascript
// bad
function foo() {
  // ...
}
// bad
const foo = function () {
  // ...
}
// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
}
```

有兴趣的话可以看下 StackOverflow 上关于它们的讨论 [地址](https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname)

为什么声明函数会有 2 种截然不同的方式呢，这是因为 js 中的函数是头等函数(**First-class Function**)，或者说是一等公民，函数可以被当作参数传递给其他函数，可以作为另一个函数的返回值，还可以被赋值给一个变量。虽然 js 中的函数看起来是函数，但本质上是对象，它除了具有函数式的特点外，同时还具有面向对象的特点，因此在 js 中你还能给一个函数设置属性，甚至给函数设置一个函数：

```javascript
function test() {
  console.log(1)
}
test.x = 'x'
test.y = value => console.log(value)

test() // 输出1
console.log(test.x) // 输出x
test.y(2) // 输出2
```

这也是 js 中常见的“魔法”操作 。

**注意事项：**

函数需要定义在一对花括号中，但是花括号在 js 中有两个语义，block 和对象，有歧义的地方会优先解释为 block，因此会有这样的问题：

```javascript
const test = value => {
  value
}
console.log(test(1))
```

试图定义一个函数，传入一个参数并返回一个以该参数作为属性的对象，此处以为会返回 `{ value: 1 }` ，实际上会返回 `undefined` (无返回值的函数默认会返回 undefined )。虽然单行语句可以省略花括号和 return，但这里发生了歧义，因此不能省略，即使只有一行也要按照多行语句来写。

```javascript
const test1 = value => {
  return { value }
}
const test2 = value => ({ value })
console.log(test1(1), test2(2)) // 成功打印出 { value: 1 } 和 { value: 2 }
```

在**Typescript**下，函数声明有个短板，无法进行函数类型声明，只能分别标注参数与返回值，用函数表达式则可以标注整个函数的类型：

```typescript
function getColumns(
  funs: ((row?: RowDate) => void)[]
): DataTableColumn<RowDate>[] {
  //
}
```

上面的 RowDate 在不同场景需要替换成不同的类型，且函数的具体语句也有差异，假设我们有多个地方需要使用这个函数，那就需要写很多次长长的参数与返回值声明，通过函数类型声明我们可以进行优化：

```typescript
type GetColumns<T> = (funs: ((row?: T) => void)[]) => DataTableColumn<T>[]

const getColumns: GetColumns<RowDate> = funs => {
  //
}
```

将这个函数类型抽离后，仅需要该类型和一个泛型参数，就能推断出 funs 的类型并对返回值进行约束，且能多处复用，明显简洁不少。

函数声明虽然也能达成这种操作，但是非常复杂且难看，还不如最初的声明方式：

```typescript
function getColumns(
  ...[funs]: Parameters<GetColumns<RowDate>>
): ReturnType<GetColumns<RowDate>> {
  //
}
```

那么到底该选择哪种方式呢？我想了下这个问题其实没有答案，各有优劣，需要结合团队的习惯、具体场景去讨论，而不应该一边倒地进行限制。

我目前的使用方式：大部分场景使用函数声明，少部分场景使用函数表达式。

相比函数表达式，函数声明的 function 关键字更加直观了然，很清晰的代表这是一个函数。对于一个模块而言，因为存在函数提升，我们能把多个函数按照重要性/使用频率/调用顺序等进行组织，而不需要把无关紧要的函数放在前面。

从避免浪费的角度来说，某些函数以函数表达式声明也是个好实践，因为函数声明会在代码执行前创建，即使没有调用也占用内存空间，而函数表达式是在运行过程时才进行创建，调用后立即释放。当然实际编程中，二者的区别可以忽略不计。
