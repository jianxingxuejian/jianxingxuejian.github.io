<!-- 按钮+图标+悬浮信息文字or弹出确认 -->
<template>
  <n-popconfirm
    v-if="$slots.popconfirm"
    :show-icon="false"
    @positive-click="onClick"
  >
    <template #trigger>
      <n-button :text="!text" v-bind="$attrs">
        <template #icon>
          <slot></slot>
        </template>
        <span>{{ text }}</span>
      </n-button>
    </template>
    <slot name="popconfirm"></slot>
  </n-popconfirm>

  <n-tooltip v-else-if="$slots.tooltip">
    <template #trigger>
      <n-button :text="!text" v-bind="$attrs" class="text-8" @click="onClick">
        <slot></slot>
        <span class="text-4">{{ text }}</span>
      </n-button>
    </template>
    <slot name="tooltip"></slot>
  </n-tooltip>

  <n-button v-else :text="!text" v-bind="$attrs" @click="onClick">
    <template #icon>
      <slot></slot>
    </template>
    <span>{{ text }}</span>
  </n-button>
</template>

<script setup lang="ts">
  defineProps<{
    /** 按钮文本 */
    text?: string
    /** 点击事件 */
    onClick?: () => void
  }>()
</script>
