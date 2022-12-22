---
title: TS备忘录(TODO)
date: 2022-09-26
wordCount: 100
tags: [ts]
---

# TS 备忘录

**可能用到的工具类型：**

```typescript
/** 可为null */
type Nullable<T> = T | null

/** 不可为null */
type NonNullable<T> = T extends null | undefined ? never : T

type Arrayable<T> = T | T[]

/** 将对象的所有属性设置为可选且可为null */
type NullablePartial<T> = {
  [P in keyof T]?: T[P] | null
}

/** 将对象的部分属性设置为可选 */
type Optional<
  T extends Record<string, any>,
  K extends keyof T = keyof T
> = Omit<T, K> & Partial<Pick<T, K>>

/** 联合类型转交叉类型 */
// https://stackoverflow.com/questions/50374908
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never
```

**可能用到的类型定义手法：**

- 互斥属性
  ```typescript
  type Test = ({ name: string } & { age?: never }) | ({ name?: never } & { age: number })
  const test1: Test = { name: 'aaa' } // OK
  const test2: Test = { age: 11 } // OK
  const test3: Test = { name: 'aaa', age: 11 } // Error

  type Test1 = {} & ({ name: string; age: number } | { name?: never; age?: never })
  const test4: Test1 = {} // OK
  const test5: Test1 = { name: 'bbb', age: 18 } // OK
  const test6: Test1 = { name: 'bbb' } // Error
  ```
