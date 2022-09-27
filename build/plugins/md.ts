import Markdown from 'vite-plugin-md'
// import code from '@yankeeinlondon/code-builder'
// import link from '@yankeeinlondon/link-builder'
// import meta from '@yankeeinlondon/meta-builder'
import Shiki from 'markdown-it-shiki'

export default Markdown({
  // wrapperComponent: 'Essay',
  wrapperClasses: 'prose',
  markdownItSetup(md) {
    md.use(Shiki, {
      theme: {
        light: 'light-plus',
        dark: 'dark-plus'
      }
    })
  },
  builders: [
    // meta(),
    // link(),
    // code({
    //   theme: 'duotone'
    // })
  ]
})
