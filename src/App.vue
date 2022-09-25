<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { zhCN, dateZhCN } from 'naive-ui'
  const themeOverrides = {
    Pagination: {
      itemColorDisabled: 'rgba(234,234,234,255)'
    }
  }
</script>

<style lang="scss">
  @import '@/styles/scss/index.scss';
</style>
