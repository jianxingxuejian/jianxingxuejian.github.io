<template>
  <div>
    <slot></slot>
    <div class="h-12 bg-white/30 flex-evenly">
      <my-button
        text="上一篇"
        quaternary
        :bordered="false"
        :disabled="!prev"
        @click="jumpToPrev"
      >
        <icon-ic:twotone-arrow-back />
      </my-button>
      <my-button text="目录" quaternary :bordered="false" @click="jumpToList">
        <icon-ic:twotone-arrow-upward />
      </my-button>
      <my-button
        text="下一篇"
        quaternary
        :bordered="false"
        :disabled="!next"
        @click="jumpToNext"
      >
        <icon-ic:twotone-arrow-forward />
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { blogs } from '@/router/pages'
  import { recent, prev, next } from '@/stores'

  defineProps<{
    frontmatter: Record<string, string>
  }>()

  const route = useRoute()
  const router = useRouter()

  function jumpToPrev() {
    if (prev.value) {
      router.push(prev.value)
    }
  }

  function jumpToList() {
    router.push({ name: 'list_index', params: { tag: recent.value } })
  }

  function jumpToNext() {
    if (next.value) {
      router.push(next.value)
    }
  }

  watchEffect(() => {
    const index = blogs.findIndex(item => item.path === route.path)
    prev.value = index - 1 < 0 ? undefined : blogs[index - 1].path
    next.value = index + 1 >= blogs.length ? undefined : blogs[index + 1].path
  })

  let top = 0

  onActivated(() => {
    document.body.scrollTop = top
  })

  onDeactivated(() => {
    top = document.body.scrollTop
  })
</script>
