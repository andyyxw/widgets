import {
  DeployMode,
  Widget,
  WidgetKeyword,
} from '@widget-js/core'

const name = 'cn.widgetjs.widgets.clipboard'
// 组件标题
const title = { 'zh-CN': '剪切板搜索' }
// 组件描述
const description = { 'zh-CN': '在屏幕上方显示剪切板快捷搜索' }
// 组件关键词
const keywords = [WidgetKeyword.RECOMMEND]
// 组件路由地址
const path = '/widget/clipboard'
// 配置页路由地址
const configPagePath = '/widget/config/clipboard'
// 组件关键词
const ClipboardWidgetDefine = new Widget({
  path,
  configPagePath,
  name,
  title,
  description,
  keywords,
  lang: 'zh-CN',
  width: 6,
  height: 1,
  minWidth: 6,
  maxWidth: 6,
  permissions: ['clipboard'],
  previewImage: '/images/preview_clipboard.png',
  minHeight: 1,
  maxHeight: 1,
  supportDeployMode: DeployMode.BACKGROUND,
  backgroundThrottling: false,
})

export default ClipboardWidgetDefine
