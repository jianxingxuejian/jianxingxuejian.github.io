---
title: 组合式函数入门
date: 2022-09-20
wordCount: 0
tags: [vue,ts]
---

# 组合式函数入门

vue3 关于组合式函数的说明 [地址](https://cn.vuejs.org/guide/reusability/composables.html)

在如今的前端工程化领域中，组件是一个很常见的概念，通过对关联程度高的 HTML 结构、状态、事件等进行封装，便于不同程度的抽象以及代码复用，实现高内聚低耦合。

然而 vue2 对函数封装与复用的支持并不够好，一个大型组件可能会有几百行难以进一步拆分的复杂逻辑，并且逻辑有关联的代码被选项式 api 强制隔离在不同的位置上，无法沿着一条链路去阅读逻辑，需要上下反复翻看，开发体验极差。使用mixins也有各种问题，数据来源不清晰，隐式耦合等等。而组合式 api 便是 vue 学习了 react 的 hooks 之后做出的改进，将 js 代码的组织权力重新还给开发者，除此之外，你还能将一组包含组合式 api 的函数片段抽离到外部便于多次重用，在 vue 中被称作”组合式函数(**Composables**)“。组合式 api 相比选项式，上限更高，下限也更低，不注意就会写出比选项式还要糟糕的代码，因为他对开发者的代码抽象与组织能力要求提高了不少，很难像以前那样无脑地堆砌，因此学习 vue3，写好组合式函数便是重中之重。相比vue2，vue3对TypeScript的需求也更强烈，组合式函数非常需要类型约束与类型推断带来的益处。

例如一个表格分页界面，刚接触vue3的人可能会写出如下代码：

```vue
<script setup lang="ts">
  const loading = ref(false) // 页面等待状态
  const pageParam = reactive({}) as TestPageParam // 请求参数
  const pageData = ref<TestPageData[]>() // 表格数据
  const pagination = reactive<Pagination>({ /** */ }) // 分页配置
  // 获取数据
  async function getPageData() {
    loading.value = true
    // 请求接口，pageParam作为入参，修改pageData
    loading.value = false
  }
  // 选择页码
  function handlePageIndex(pageIndex: number) {
    pageParam.pageIndex = pageIndex
  }
  // 选择页大小
  function handlePageIndex(pageSize: number) {
    pageParam.pageSize = pageSize
  }
  //监听参数对象，发生变化时重新请求数据
  watch(
    pageParam,
    () => getData(),
    { immediate: true }
  )
</script>
```

将响应式数据绑定在组件上，就完成了一个简单的分页页面，这样的页面可能很多，你可能会把这段逻辑一次又一次的copy，改下类型完事。当你的项目中充斥了大量相似逻辑的时候，首先需要思考的就是它们能否进行复用？
