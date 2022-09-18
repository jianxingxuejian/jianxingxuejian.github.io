<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in" appear>
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

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
