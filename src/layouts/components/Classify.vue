<template>
  <n-card title="分类" :bordered="false" class="bg-white/50">
    <div class="grid grid-cols-2 text-4 text-center">
      <n-a v-for="item in classify" :key="item"> {{ item }} </n-a>
    </div>
  </n-card>
</template>

<script setup lang="ts">
  const classify = ['JavaScript', 'TypeScript', 'CSS', 'Vue', 'Vite']
</script>
