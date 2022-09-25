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
    <div class="flex-center">
      <div
        v-for="num in pageCount"
        :key="num"
        class="w-7 h-7 ml-3 text-4 flex-center rounded shadow cursor-pointer"
        :class="[
          num === modelValue
            ? 'bg-zinc-800/50 color-white'
            : 'bg-white/50 hover:color-cyan-600'
        ]"
        @click="$emit('update:modelValue', num)"
      >
        {{ num }}
      </div>
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
</script>
