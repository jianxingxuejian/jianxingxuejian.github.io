<template>
  <div class="flex-center">
    <span class="shrink-0">标签：</span>
    <div class="grow flex-start">
      <n-tag
        v-for="item in tags"
        :key="item.name"
        size="small"
        :bordered="false"
        :color="item.color"
        class="cursor-pointer mr-3"
      >
        {{ item.name }}
      </n-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    tags: string[]
  }>()

  const tags = props.tags.map(item => {
    switch (item) {
      case 'js':
        return {
          name: 'JavaScript',
          color: {
            color: '#d7d894',
            textColor: '#555'
          }
        }
      default:
        return { name: '', color: undefined }
    }
  })
</script>
