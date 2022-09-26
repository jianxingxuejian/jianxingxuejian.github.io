<template>
  <div class="flex-between select-none">
    <div
      class="h-7 text-4 px-3 bg-white/50 flex-center rounded-md shadow"
      :class="[
        modelValue === 1
          ? 'cursor-not-allowed'
          : 'cursor-pointer hover:color-cyan-600'
      ]"
      @click="handlePrev"
    >
      上一页
    </div>
    <div v-if="!simple" class="flex-center">
      <div
        v-for="(item, index) in pageList"
        :key="index"
        class="w-7 h-7 ml-3 text-4 flex-center rounded shadow cursor-pointer"
        :class="[
          item == modelValue.toString()
            ? 'bg-zinc-800/50 color-white rounded shadow'
            : 'bg-white/50 hover:color-cyan-600 rounded shadow'
        ]"
        @click="handleJumpTo(item)"
      >
        {{ item }}
      </div>
    </div>
    <div v-else class="flex-center">
      <n-input-number
        :value="modelValue"
        :show-button="false"
        :max="pageCount"
        placeholder=""
        class="w-20 text-center"
      />
      <span class="text-6">&nbsp;/&nbsp;</span>
      <span class="text-6">123</span>
    </div>
    <div
      class="h-7 text-4 px-3 ml-3 bg-white/50 flex-center rounded-md shadow"
      :class="[
        modelValue >= pageCount
          ? 'cursor-not-allowed'
          : 'cursor-pointer hover:color-cyan-600'
      ]"
      @click="handleNext"
    >
      下一页
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useElementSize } from '@vueuse/core'

  const props = defineProps<{
    /** 页码 */
    modelValue: number
    /** 页大小 */
    pageSize: number
    /** 总条数 */
    itemCount: number
  }>()

  const emits = defineEmits<{
    (e: 'update:modelValue', num: number): void
  }>()

  const pageCount = computed(() => Math.ceil(props.itemCount / props.pageSize))
  const ellipsisLeftShow = ref(false)
  const ellipsisLeft = ref<number[]>([])
  const ellipsisRightShow = ref(false)
  const ellipsisRight = ref<number[]>([])
  const center = ref<number[]>([])

  const pageList = computed(() =>
    new Array<number | string>(1)
      .concat(ellipsisLeftShow.value ? '...' : [])
      .concat(center.value)
      .concat(ellipsisRightShow.value ? '...' : [])
      .concat(pageCount.value > 1 ? pageCount.value : [])
  )

  function handlePrev() {
    if (props.modelValue > 1) {
      emits('update:modelValue', props.modelValue - 1)
    }
  }

  function handleNext() {
    if (props.modelValue < pageCount.value) {
      emits('update:modelValue', props.modelValue + 1)
    }
  }

  function handleJumpTo(item: number | string) {
    const num = Number(item)
    if (isNaN(num)) return
    emits('update:modelValue', num)
  }

  const { width } = useElementSize(document.body)
  const simple = computed(() => width.value < 640)

  watchEffect(() => {
    const page = props.modelValue
    const count = pageCount.value

    if (count > 9 && page > 5) {
      ellipsisLeftShow.value = true
      ellipsisLeft.value = Array.from({ length: page - 4 }, (_, i) => i + 2)
    } else {
      ellipsisLeftShow.value = false
    }

    if (count > 9 && count > page + 4) {
      ellipsisRightShow.value = true
      let start = page <= 5 ? 8 : page + 3
      ellipsisRight.value = Array.from(
        { length: count - start },
        (_, i) => i + start
      )
    } else {
      ellipsisRightShow.value = false
    }

    const left = ellipsisLeftShow.value
    const right = ellipsisRightShow.value

    if (count > 2) {
      const lehgth = (count > 9 ? 7 : count - 2) - Number(left) - Number(right)
      const start = left ? (count - page <= 3 ? count - 6 : page - 2) : 2
      center.value = Array.from({ length: lehgth }, (_, i) => i + start)
    }
  })
</script>

<style lang="scss" scoped>
  :deep(.n-input) {
    font-size: 1.5rem;
    .n-input-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
