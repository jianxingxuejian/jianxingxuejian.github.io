/** 文章元数据 */
interface BlogMeta {
  /** 标题 */
  title: string
  /** 时间 */
  date: string
  /** 字数 */
  wordCount: numberr
  /** 标签 */
  tags: string[]
}
/** 文章信息 */
type BlogInfo = BlogMeta & {
  /** 路径 */
  path: string
}
