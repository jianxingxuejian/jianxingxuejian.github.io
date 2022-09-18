interface Classify {
  name: string
  tag: string
  num?: number
  tagColor: string
}

const classifies = ref<Classify[]>([])

export { classifies }
