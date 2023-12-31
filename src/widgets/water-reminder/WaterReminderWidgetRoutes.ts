import type { RouteRecordRaw } from 'vue-router'
import WaterReminderWidgetDefine from './WaterReminder.widget'

const url = WaterReminderWidgetDefine.path
const name = WaterReminderWidgetDefine.name

const configUrl = WaterReminderWidgetDefine.configPagePath

const WaterReminderWidgetRoutes: RouteRecordRaw[] = [
  {
    path: url,
    name: `${name}`,
    component: () => import(/* webpackChunkName: "com.wisdom.widgets.water_reminder" */ './WaterReminderWidgetView.vue'),
  },
  {
    path: configUrl!,
    name: `${name}.config`,
    component: () => import(/* webpackChunkName: "com.wisdom.widgets.water_reminder.config" */ './WaterReminderConfigView.vue'),
  },
]

export default WaterReminderWidgetRoutes
