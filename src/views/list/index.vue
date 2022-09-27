<template>
  <div class="flex-col h-full">
    <div id="list" class="h-[calc(100%-32px)]">
      <TransitionGroup :css="false" @enter="onEnter">
        <div
          v-for="(item, index) in list"
          :key="item.title"
          :data-index="index"
          class="flex-col"
        >
          <n-card class="mb-20px bg-white/70" :bordered="false">
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
      </TransitionGroup>
    </div>
    <div class="flex-center">
      <my-pagination
        v-model="pagination.page"
        :page-size="pagination.pageSize"
        :item-count="pagination.itemCount"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { chunk } from 'lodash-es'
  import { useEventListener } from '@vueuse/core'
  import gsap from 'gsap'
  import { blogs } from '@/router/pages'
  import { recent } from '@/stores'
  import { RendererElement } from 'vue'

  const props = defineProps<{
    tag: string
  }>()

  const pagination = reactive({
    page: 1,
    pageSize: 1,
    itemCount: blogs.length
  })

  const list = computed(() => {
    if (pagination.pageSize === 1) return []
    if (props.tag !== 'all') {
      return chunk(
        blogs.filter(item => item.tags.includes(props.tag)),
        pagination.pageSize
      )[pagination.page - 1]
    } else {
      return chunk(blogs, pagination.pageSize)[pagination.page - 1]
    }
  })

  const router = useRouter()

  function jump(path: string) {
    recent.value = props.tag
    router.push(path)
  }

  function onEnter(el: RendererElement, done: () => void) {
    gsap.from(el, {
      opacity: 0,
      y: 100,
      delay: el.dataset.index * 0.1,
      duration: 0.5,
      onComplete: done
    })
  }

  function autoResize() {
    const width = document.body.clientWidth
    const height = document.body.clientHeight
    const listHeight = document.getElementById('list')?.offsetHeight as number
    if (width < 640) {
      if (height < 800) {
        pagination.pageSize = 3
      } else {
        pagination.pageSize = 4
      }
    } else if (width < 1024) {
      pagination.pageSize = 6
    } else {
      pagination.pageSize = Math.floor(listHeight / 136)
    }
  }

  useEventListener(window, 'resize', () => {
    autoResize()
  })

  onActivated(() => {
    autoResize()
    document.body.scrollTop = 0
  })
</script>
