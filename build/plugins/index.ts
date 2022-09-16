import type { PluginOption } from 'vite'
import compress from './compress'
import html from './html'
import https from './https'
import md from './md'
import unocss from './unocss'
import unplugin from './unplugin'
import vue from './vue'

/**
 * 安装vite插件
 */
export function setupVitePlugins(env: ImportMetaEnv): PluginOption[] {
  const plugins = [compress, html(env), https, md, unocss, ...unplugin, vue]
  return plugins
}
