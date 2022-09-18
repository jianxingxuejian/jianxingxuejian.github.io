<template>
  <n-card
    :bordered="false"
    class="bg-white/50 lg:(min-h-[calc(100vh-40px)] mb-20px)"
  >
    <div v-for="item in list" :key="item.title" class="flex-col">
      <n-card :title="item.title" class="mb-20px bg-white/80">
        <template #header-extra>
          <n-button
            text
            size="large"
            class="ml-5 text-[#18a058]"
            @click="router.push(item.path)"
          >
            <template #icon>
              <icon-mdi-book-open-outline />
            </template>
            阅读
          </n-button>
        </template>
        <div class="flex-col ml-8 sm:(flex-evenly flex-row ml-8)">
          <my-tag :tags="item.tags" />
          <div>时间：{{ item.date }}</div>
          <div>字数：{{ item.wordCount }}</div>
        </div>
      </n-card>
    </div>
  </n-card>
</template>

<script setup lang="ts">
  import { blogs } from '@/router/pages'

  const props = defineProps<{
    tag: string
  }>()
  let list: BlogInfo[] = []
  if (props.tag !== 'all') {
    list = blogs.filter(item => item.tags.includes(props.tag))
  } else {
    list = blogs
  }

  const router = useRouter()
</script>
