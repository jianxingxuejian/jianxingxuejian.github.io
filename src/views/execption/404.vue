<template>
  <n-result
    status="404"
    title="404 资源不存在"
    description="你走错路了"
    size="huge"
    class="mt-10"
  >
    <template #footer>
      <n-button @click="router.back">返回</n-button>
    </template>
  </n-result>
</template>

<script setup lang="ts">
  const router = useRouter()
</script>
