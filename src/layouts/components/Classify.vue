<template>
  <n-card title="分类" :bordered="false" class="bg-white/50">
    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-x-4 text-4 text-center"
    >
      <n-a
        v-for="item in classifies"
        :key="item.name"
        class="hover:underline"
        @click="toList(item.tag)"
      >
        {{ item.name + '(' + item.num + ')' }}
      </n-a>
    </div>
  </n-card>
</template>

<script setup lang="ts">
  import { blogs } from '@/router/pages'
  import { countBy } from 'lodash-es'
  import { classifies } from '@/stores'

  const a = 'a'
  const test = Number(a)
  console.log(test)
  const str = 'hello'
  console.log(str.slice(test, 0))

  classifies.value = [
    { name: '全部', tag: 'all', num: blogs.length, tagColor: '#fff' },
    { name: 'JavaScript', tag: 'js', tagColor: '#d3b72f' },
    { name: 'TypeScript', tag: 'ts', tagColor: '#2575c3' },
    { name: 'CSS', tag: 'css', tagColor: '#ec972c' },
    { name: 'Vue', tag: 'vue', tagColor: '#2bb885' },
    { name: 'Vite', tag: 'vite', tagColor: '#fff' }
  ]
  const count = countBy(blogs.map(item => item.tags).flat())
  classifies.value.slice(1).forEach(item => {
    item.num = count[item.tag] || 0
  })

  const router = useRouter()
  function toList(tag: string) {
    router.push({ name: 'list_index', params: { tag } })
  }
</script>
