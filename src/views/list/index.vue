<template>
  <div class="w-full">
    <n-card :bordered="false" class="bg-white/80">
      <router-link to="/how-to-define-function" #="{ navigate, href }" custom>
        <n-a :href="href" @click="navigate"> 跳转 </n-a>
      </router-link>
    </n-card>
  </div>
</template>

<script setup lang="ts"></script>
