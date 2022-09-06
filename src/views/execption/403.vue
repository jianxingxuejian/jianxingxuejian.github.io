<template>
  <n-result
    status="403"
    title="403 禁止访问"
    description="总有些门是对你关闭的"
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
