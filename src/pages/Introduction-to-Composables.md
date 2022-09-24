---
title: 组合式函数入门
date: 2022-09-20
wordCount: 1800
tags: [vue, ts]
---

# 组合式函数入门

vue3 关于组合式函数的说明 [地址](https://cn.vuejs.org/guide/reusability/composables.html)

在如今的前端工程化领域中，组件是一个很常见的概念，通过对关联程度高的 HTML 结构、状态、事件等进行封装，便于不同程度的抽象以及代码复用，实现高内聚低耦合。

然而 vue2 对函数封装与复用的支持并不够好，一个大型组件可能会有几百行难以进一步拆分的复杂逻辑，并且逻辑有关联的代码被选项式 api 强制隔离在不同的位置上，无法沿着一条链路去阅读逻辑，需要上下反复翻看，开发体验极差。使用 mixins 也有各种问题，数据来源不清晰，隐式耦合等等。而组合式 api 便是 vue 学习了 react 的 hooks 之后做出的改进，将 js 代码的组织权力重新还给开发者，除此之外，你还能将一组包含组合式 api 的函数片段抽离到外部便于多次重用，在 vue 中被称作”组合式函数(**Composables**)“，或者沿袭 react 的习惯称之为 hooks 也行。组合式 api 相比选项式，上限更高，下限也更低，不注意就会写出比选项式还要糟糕的代码，因为他对开发者的代码抽象与组织能力要求提高了不少，很难像以前那样无脑地堆砌，因此学习 vue3，写好 hooks 便是重中之重。相比 vue2，vue3 对 TypeScript 的需求也更强烈，hooks 非常需要类型约束与类型推断带来的益处。

例如一个表格分页界面，刚接触 vue3 的人可能会写出如下代码(以下使用 naive-ui 组件作为示例)：

```vue
<script setup lang="ts">
  const loading = ref(false) // 页面等待状态
  const pageParam = reactive({}) as TestPageParam // 请求参数
  const pageData = ref<TestPageData[]>() // 表格数据
  const pagination = reactive<Pagination>({}) // 分页配置
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

  // 其它业务逻辑

  // 监听参数对象，发生变化时重新请求数据
  watchEffect(getData)
</script>
```

将响应式数据绑定在组件上，就完成了一个简单的表格分页页面，这样的页面可能很多，你可能会把这段逻辑一次又一次的 copy，稍作修改。当你的项目中充斥了大量相似逻辑的时候，首先需要思考的就是它们能否复用？

所谓的 hooks，本质上是一个闭包，我们可以把上述逻辑全部放入一个名为 usePage 的闭包中，再把需要的变量与方法 return 出来。像这样：

```typescript
import { getXxxPage } from '@/api'

const {
  loading,
  pageParam,
  pagination,
  pageData,
  getPageData,
  handlePageIndex,
  handlePageSize
} = usePage(getXxxPage)
```

像这样封装了一个 hook 之后，所有重复逻辑都被压缩成一个表达式，十分简洁。

封装 hook 不难，难点在完善的类型约束与推断，这需要整个项目有合理完善的类型基础。

我们需要类似这样的全局类型：

```typescript
/** 全局接口请求结果 */
interface ApiResult<T = null> {
  code: number
  msg: string
  data: T
}
/** 分页请求结果 */
interface Page<T> {
  pageIndex: number
  pageSize: number
  total: number
  records: T[]
}
/** 分页基本参数 */
interface PageBaseParam {
  pageIndex?: number
  pageSize?: number
  keyword?: string
  desc?: boolean
}
```

对接 ui 组件也需要相应的类型：

```typescript
/** 分页配置 */
interface Pagination {
  page: number
  pageSize: number
  pageCount?: number
  itemCount?: number
  showSizePicker?: boolean
  pageSizes?: number[]
}
type PageSizes = Pick<Pagination, 'showSizePicker' | 'pageSizes'>
```

请求接口的类型标注：

```typescript
interface TestPageParam extends PageBaseParam {}
interface TestResult {}

export async function getXxxPage(params: TestPageParam) {
  return request.post<PageResult<TestResult>>('/xxx', params)
}
```

usePage 具体实现：

```typescript
import { useLoading } from '@/hooks'

export default function <T extends PageBaseParam, K>(
  func: (params: T) => Promise<ApiResult<Page<K>> | null>,
  params?: T & PageSizes & { immediate?: boolean; deep?: boolean }
) {
  // 加载状态hook，hook中还能使用其它hook
  const { loading, startLoading, endLoading } = useLoading()

  // 如果没传分页相关参数，则使用默认参数
  const {
    pageIndex = 1,
    pageSize = 10,
    showSizePicker = true,
    immediate = true,
    deep,
    ...args
  } = params || {}
  const pageSizes = params?.pageSizes || [pageSize, pageSize * 2, pageSize * 3]

  /** 分页请求参数 */
  const pageParam = reactive({
    pageIndex,
    pageSize,
    ...args
  }) as T // 在上面对可选参数解构并默认赋值后，被解构的参数再也无法还原成原来的泛型类型，另外reactive在使用泛型时，推断出来的UnwrapNestedRefs<T>对类型系统有负面影响，经过评估思考，在这里使用断言是最好的做法。

  /** 分页配置 */
  const pagination = reactive<Pagination>({
    page: pageIndex,
    pageSize,
    showSizePicker,
    pageSizes
  })

  /** 分页数据 */
  const pageData = ref<K[]>()

  /** 请求分页数据 */
  async function getPageData(): Promise<void> {
    startLoading()
    const result = await func(pageParam)
    if (result?.code === 200) {
      const { pageIndex, pageSize, total, records } = result.data
      pagination.page = pageIndex
      pagination.pageSize = pageSize
      pagination.itemCount = total
      pagination.pageCount = Math.ceil(total / pageSize)
      pageData.value = records
    }
    endLoading()
  }

  // 监听请求事件
  watch(pageParam, () => getPageData(), { immediate, deep })

  /** 选择页码 */
  function handlePageIndex(page: number): void {
    pageParam.pageIndex = page
  }

  /** 选择页大小 */
  function handlePageSize(pageSize: number): void {
    pageParam.pageSize = pageSize
  }

  return {
    loading,
    pageParam,
    pagination,
    pageData,
    getPageData,
    handlePageIndex,
    handlePageSize
  }
}
```

这样就完成了一个较为简单的分页相关的 hook，无需重复的变量定义，大部分场景下只需要一个准确标注了入参与返回值的接口请求方法；同时你还可以在第二个参数里设定初始参数，或者设定 watch 的 immediate 属性决定是否立即触发回调等等。具体功能根据项目的整体设计来慢慢完善，最终要达到能 cover 绝大部分场景且未来能够继续扩展。

改造成 hook 后，我们 js 部分的逻辑也能像组件那样进行抽象与复用，如此一来相当多的重复逻辑都可被替换掉，系统更加健壮更利于扩展。相应的，hooks 函数也需要符合高内聚低耦合的设计哲学，当我们高频率的同时使用多个 hook 时，需要思考有没有必要进行合并，一个逻辑十分长的 hook 有没有必要进行切割，多个 hook 使用时，有没有依赖冲突的风险，如下所示就是一个反面例子：

```javascript
const { data1, ... } = useTest1(data2, ...)
const { data2, ... } = useTest2(data1, ...)
```

如果没有合理地组织好 hooks，很有可能出现这种先有鸡还是先有蛋的尴尬场面，这是一个挺棘手的问题，说明整体设计存在不合理的地方，首先尝试进行重构，看能否脱离强耦合关系，或者合并成一个 hook，甚至全面重构所有相关 hook。如果重构困难，或者业务上有其他因素无法重构，可以暂时将这两个 hook 封装成一个大的 hook，后续再进行改进：

```javascript
export default function() {
  const data1, data2
  const { ... } = useTest1(data2, ...)
	const { ... } = useTest2(data1, ...)
  return{ data1, data2, ... }
}
```

迎来了 vue3 的组合式 api 与组合式函数之后，vue 终于能够从容面对大型项目的挑战，它走向了一个新的阶段，而作为开发者，应该毫不犹豫地丢弃以往的过时设计，大胆地使用新的 api、新的理念去构筑新的项目。
