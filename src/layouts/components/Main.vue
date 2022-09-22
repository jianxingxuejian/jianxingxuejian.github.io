<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in" appear>
      <!-- <keep-alive> -->
      <component :is="Component" :key="route.fullPath" />
      <!-- </keep-alive> -->
    </transition>
  </router-view>
</template>

<script setup lang="ts">
  const cache = reactive<Record<string, number>>({})
  const route = useRoute()
  watch(
    () => route.path,
    (newVal, oldVal) => {
      cache[oldVal] = document.body.scrollTop
      document.body.scrollTop = 0
      setTimeout(() => {
        const top = cache[route.path] || 0
        document.body.scrollTo({ top })
      }, 1000)
    }
  )
</script>

<style lang="scss">
  .fade-slide-leave-active,
  .fade-slide-enter-active {
    transition: all 0.4s;
  }
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateX(-4rem);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(4rem);
  }
</style>
