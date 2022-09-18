<template>
  <div
    class="px-5vw grid gap-x-6 w-screen lg:grid-cols-[22fr_66fr] 2xl:grid-cols-[18fr_48fr_18fr]"
  >
    <div class="h-0 order-0 grid-col-start-1 grid-col-end-1"></div>
    <layout-main
      class="order-1 lg:(order-2 grid-row-span-2) 2xl:grid-row-a mt-20px p-5 min-w-0"
    />

    <transition name="aside-left" appear>
      <aside class="order-2 lg:order-1 grid-col-start-1 grid-col-end-1">
        <div class="sticky top-20px">
          <layout-author class="mt-20px" />
          <layout-classify class="mt-20px" />
        </div>
      </aside>
    </transition>

    <transition name="aside-right" appear>
      <aside class="order-3">
        <div class="sticky top-20px">
          <layout-about class="h-400px mt-20px" />
          <layout-about class="h-400px mt-20px" />
        </div>
      </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import {
    LayoutAbout,
    LayoutAuthor,
    LayoutClassify,
    LayoutMain
  } from './components'
</script>

<style lang="scss">
  .aside-left-enter-active,
  .aside-right-enter-active {
    transition: all 1s;
  }
  .aside-left-enter-from {
    opacity: 0;
    transform: translateX(-20rem);
  }
  .aside-right-enter-from {
    opacity: 0;
    transform: translateX(-20rem);
  }
  @media (min-width: 1536px) {
    .aside-right-enter-from {
      opacity: 0;
      transform: translateX(20rem);
    }
  }
</style>
