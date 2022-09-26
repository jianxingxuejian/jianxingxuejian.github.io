<template>
  <div class="flex-col h-full">
    <div id="list" class="h-[calc(100%-40px)]">
      <TransitionGroup @enter="onItemEnter">
        <div v-for="item in list" :key="item.title" class="flex-col">
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
    <div class="flex-center mt-12px">
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

  const props = defineProps<{
    tag: string
  }>()

  const pagination = reactive({
    page: 1,
    pageSize: 1,
    itemCount: blogs.length
  })

  const list = computed(() => {
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

  function onItemEnter(el: HTMLElement, done: () => void) {
    gsap.to(el, {
      opacity: 1,
      height: '1.6em',
      delay: 1 + Number(el.dataset.index) * 0.15,
      onComplete: done
    })
  }

  function autoResize() {
    const width = document.body.clientWidth
    if (width < 640) {
      pagination.pageSize = 4
    } else if (width < 1024) {
      pagination.pageSize = 6
    } else if (width < 1536) {
      pagination.pageSize = 10
    } else {
      pagination.pageSize = 6
    }
  }

  useEventListener(window, 'resize', () => {
    autoResize()
  })

  onActivated(() => {
    autoResize()
    // document.body.scrollTop = 0
  })
</script>
