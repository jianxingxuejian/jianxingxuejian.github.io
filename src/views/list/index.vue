<template>
  <n-card :bordered="false" class="bg-white/50 flex-col h-full">
    <div class="h-[calc(100%-40px)]">
      <div v-for="item in list" :key="item.title" class="flex-col">
        <n-card class="mb-20px bg-white/80">
          <template #header>
            <span class="cursor-pointer" @click="jump(item.path)">
              {{ item.title }}
            </span>
          </template>
          <template #header-extra>
            <n-button
              text
              size="large"
              class="ml-5 text-[#18a058]"
              @click="jump(item.path)"
            >
              <template #icon>
                <icon-mdi-book-open-outline />
              </template>
              阅读
            </n-button>
          </template>
          <div class="flex-col ml-8 sm:(flex-evenly flex-row ml-8)">
            <my-tag :tags="item.tags" />
            <div>时间：{{ item.date }}</div>
            <div>字数：{{ item.wordCount }}</div>
          </div>
        </n-card>
      </div>
    </div>
    <div class="flex-center mt-12px">
      <n-pagination v-model:page="page" :page-count="100" />
    </div>
  </n-card>
</template>

<script setup lang="ts">
  import { blogs } from '@/router/pages'
  import { recent } from '@/stores'

  const props = defineProps<{
    tag: string
  }>()

  const page = ref(1)

  const list = computed(() => {
    if (props.tag !== 'all') {
      return blogs.filter(item => item.tags.includes(props.tag))
    } else {
      return blogs
    }
  })

  const router = useRouter()

  function jump(path: string) {
    recent.value = props.tag
    router.push(path)
  }

  onActivated(() => (document.body.scrollTop = 0))
</script>
