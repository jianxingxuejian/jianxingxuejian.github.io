import pages from '~pages'
import dayjs from 'dayjs'

const blogs: BlogInfo[] = []

pages
  .sort((next, pre) =>
    dayjs(next?.meta?.frontmatter?.date).isAfter(
      dayjs(pre?.meta?.frontmatter?.date)
    )
      ? -1
      : 1
  )
  .forEach(item => {
    const { meta } = item
    if (meta?.frontmatter) {
      const frontmatter = meta.frontmatter
      frontmatter.date = dayjs(frontmatter.date).format('YYYY年M月D日')
      blogs.push({ path: item.path, ...frontmatter })
    }
  })

export { pages, blogs }
