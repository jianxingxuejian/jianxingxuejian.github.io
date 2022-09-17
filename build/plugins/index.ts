import type { PluginOption } from 'vite'
import compress from './compress'
import html from './html'
import https from './https'
import layouts from './layouts'
import md from './md'
import pages from './pages'
import unocss from './unocss'
import unplugin from './unplugin'
import vue from './vue'

/**
 * 安装vite插件
 */
export function setupVitePlugins(env: ImportMetaEnv): PluginOption[] {
  const plugins = [
    compress,
    html(env),
    https,
    layouts,
    md,
    pages,
    unocss,
    ...unplugin,
    vue
  ]
  return plugins
}
