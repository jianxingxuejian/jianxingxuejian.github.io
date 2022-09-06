<template>
  <div
    class="w-screen h-screen px-5% grid xl:grid-cols-[22fr_66fr] 2xl:grid-cols-[18fr_48fr_18fr] gap-x-6"
  >
    <div class="h-0 order-0 grid-col-start-1 grid-col-end-1"></div>
    <layout-main class="order-1 xl:order-2 grid-row-span-4" />
    <aside class="order-2 xl:order-1 grid-col-start-1 grid-col-end-1">
      <layout-author />
      <layout-classify />
    </aside>
    <aside class="order-3">
      <layout-about />
      <layout-about />
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
