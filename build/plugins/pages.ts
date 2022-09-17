import Pages from 'vite-plugin-pages'
import matter from 'gray-matter'
import { resolve } from 'path'
import fs from 'fs-extra'

export default Pages({
  pagesDir: 'src/pages',
  extensions: ['vue', 'md'],
  extendRoute(route) {
    const path = resolve(route.component.slice(1))
    const md = fs.readFileSync(path, 'utf-8')
    const { data } = matter(md)
    route.meta = Object.assign(route.meta || {}, { frontmatter: data })
    return route
  }
})
