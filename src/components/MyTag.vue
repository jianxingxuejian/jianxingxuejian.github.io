<template>
  <div class="flex-center">
    <span class="shrink-0">标签：</span>
    <div class="grow flex-start">
      <n-tag
        v-for="item in list"
        :key="item.name"
        size="small"
        :bordered="false"
        :color="{ color: item.tagColor }"
        class="cursor-pointer mr-3"
        @click="toList(item.tag)"
      >
        {{ item.name }}
      </n-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { classifies } from '@/stores'

  const props = defineProps<{
    tags: string[]
  }>()

  const list = computed(() =>
    classifies.value.filter(item => props.tags.includes(item.tag))
  )

  const router = useRouter()
  function toList(tag: string) {
    router.push({ name: 'list_index', params: { tag } })
  }
</script>
