---
title: JS备忘录(TODO)
date: 2022-09-26
wordCount: 200
tags: [js]
---

# JS 备忘录

**字符串切割：**

js 中获取字符串的子串有 3 个函数，[slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)、[substring()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)、[substr()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)，它们的入参以及使用方法非常相似，其中 substr()已经不再推荐使用，剩下的两个都能完成字符串切割功能，具体有如下区别：

1. 当 start>end 时，slice 会返回空字符串，substring 会交换 start 和 end 的位置；
2. 当 start/end 为负数时，slice 会处理成字符串长度 - |start/end|,substring 会处理成 0；

一般来说，尽量使用 slice，这个函数在数组上使用比较频繁，大部分人看到就能知道它有什么特性，slice 能 cover 绝大部分需要字符串子串的场景，真要使用 substring 记得回想下二者的区别。
