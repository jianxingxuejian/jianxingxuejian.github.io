<template>
  <n-card
    :bordered="false"
    class="bg-white/50 lg:min-h-[calc(100vh-40px)] lg:mb-20px"
  >
    <div v-for="item in blogs" :key="item.path" class="flex-col">
      <n-card :title="item.title" class="mb-20px bg-white/80">
        <template #header-extra>
          <n-button text @click="router.push(item.path)">
            <template #icon>
              <icon-mdi-book-open-outline />
            </template>
            阅读
          </n-button>
        </template>
        <div class="flex-evenly">
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

  const router = useRouter()
</script>
