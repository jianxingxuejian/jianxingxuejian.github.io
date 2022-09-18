<template>
  <div
    class="px-5vw grid lg:grid-cols-[22fr_66fr] 2xl:grid-cols-[18fr_48fr_18fr] gap-x-6 w-screen"
  >
    <div class="h-0 order-0 grid-col-start-1 grid-col-end-1"></div>
    <layout-main
      class="order-1 lg:order-2 lg:grid-row-span-2 2xl:grid-row-a mt-20px bg-white/95 p-5 min-w-0"
    />
    <aside class="order-2 lg:order-1 grid-col-start-1 grid-col-end-1">
      <div class="sticky top-20px">
        <layout-author class="mt-20px" />
        <layout-classify class="mt-20px" />
      </div>
    </aside>
    <aside class="order-3">
      <div class="sticky top-20px">
        <layout-about class="h-400px mt-20px" />
        <layout-about class="h-400px mt-20px" />
      </div>
    </aside>
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
