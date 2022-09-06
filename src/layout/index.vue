<template>
  <div
    class="w-screen h-screen px-5% grid xl:grid-cols-[22fr_66fr] 2xl:grid-cols-[18fr_48fr_18fr] gap-x-6"
  >
    <!-- grid-row-span-4 -->
    <div class="h-0 order-0 grid-col-start-1 grid-col-end-1"></div>
    <layout-main class="order-1 xl:order-2 grid-row-span-4" />
    <aside class="order-2 xl:order-1 grid-col-start-1 grid-col-end-1">
      <div class="sticky top-20px">
        <layout-author class="h-400px bg-red-3 mt-20px" />
        <layout-classify class="h-400px bg-green-3 mt-20px" />
      </div>
    </aside>
    <aside class="order-3">
      <div class="sticky top-20px">
        <layout-about class="h-400px bg-blue-3 mt-20px" />
        <layout-about class="h-400px bg-blue-3 mt-20px" />
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
