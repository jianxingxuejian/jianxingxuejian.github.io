<template>
  <n-card
    :bordered="false"
    class="bg-white/50 lg:min-h-[calc(100vh-40px)] lg:mb-20px"
  >
    <div v-for="item in blogs" :key="item.path" class="flex-col">
      <div @click="router.push(item.path)">
        <div>{{ item.title }}</div>
        <div>{{ item.date }}</div>
        <div>{{ item.wordCount }}</div>
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
  import { blogs } from '@/router/pages'

  const router = useRouter()
</script>
