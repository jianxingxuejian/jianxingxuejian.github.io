import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: {
      title: string
      date: string
      tags: string[]
    }
  }
}
