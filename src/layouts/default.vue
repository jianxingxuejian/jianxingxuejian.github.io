<template>
  <div
    class="px-5vw grid gap-x-6 h-full min-h-screen w-screen min-w-280px lg:grid-cols-[22fr_66fr] 2xl:grid-cols-[18fr_48fr_18fr]"
  >
    <div
      class="order-1 mt-20px min-w-0 lg:(order-2 grid-row-span-2 mb-20px) 2xl:grid-row-a"
    >
      <layout-main />
      <essay v-if="route.name !== 'list_index'" />
    </div>

    <transition name="aside-left" appear>
      <aside class="order-2 lg:order-1 grid-col-start-1 grid-col-end-1">
        <div class="sticky top-20px">
          <layout-author class="mt-20px" />
          <layout-classify class="mt-20px" />
        </div>
      </aside>
    </transition>

    <transition name="aside-right" appear>
      <aside class="order-3 mb-20px">
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
  const route = useRoute()
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
