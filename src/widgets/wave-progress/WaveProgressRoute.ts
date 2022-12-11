import WaveProgressWidgetDefine from "@/widgets/wave-progress/WaveProgress.widget";

const WaveProgressRoute = [
    {
        path: WaveProgressWidgetDefine.url,
        name: `${WaveProgressWidgetDefine.name}`,
        component: () => import(/* webpackChunkName: "cn.widgetjs.widgets.wave_progress" */ './WaveProgressWidgetView.vue')
    },
    {
        path: WaveProgressWidgetDefine.configUrl!,
        name: `${WaveProgressWidgetDefine.name}.config`,
        component: () => import(/* webpackChunkName: "cn.widgetjs.widgets.wave_progress.config" */ './WaveProgressConfigView.vue')
    },
]

export default WaveProgressRoute;
