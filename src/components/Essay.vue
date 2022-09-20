<template>
  <div>
    <slot></slot>
    <div class="h-12 bg-white/50 mb-20px flex-evenly">
      <div>上一篇</div>
      <div>返回</div>
      <div>下一篇</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    frontmatter: Record<string, string>
  }>()
  console.log(props)
</script>
