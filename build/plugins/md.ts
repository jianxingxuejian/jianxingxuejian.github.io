import Markdown from 'vite-plugin-md'
import code from '@yankeeinlondon/code-builder'
import link from '@yankeeinlondon/link-builder'
import meta from '@yankeeinlondon/meta-builder'

export default Markdown({
  builders: [
    meta(),
    link(),
    code({
      theme: 'base'
    })
  ]
})
