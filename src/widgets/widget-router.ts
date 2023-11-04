import TimeProgressWidgetRoutes from "@/widgets/time-progress/TimeProgressRoutes";
import WaveProgressRoute from "@/widgets/wave-progress/WaveProgressRoute";
import LaborProgressWidgetRoutes from "@/widgets/labor-progress/LaborProgressRoutes";
import BirthdayListWidgetRoutes from "@/widgets/birthday-list/BirthdayListWidgetRoutes";
import DynamicIslandWidgetRoutes from "@/widgets/dynamic-island/DynamicIslandWidgetRoutes";
import MickeyClockWidgetRoutes from "@/widgets/mickey-clock/MickeyClockWidgetRoutes";
import LyricBookWidgetRoutes from "@/widgets/lyric-book/LyricBookWidgetRoutes";
import TodoListWidgetRoutes from "./todo-list/TodoListWidgetRoutes";
import CountdownWidgetRoutes from "./countdown/CountdownWidgetRoutes";
import Countdown2WidgetRoutes from "./countdown2/Countdown2WidgetRoutes";
import PhoneReminderWidgetRoutes from "./phone-reminder/PhoneReminderWidgetRoutes";
import WaterReminderWidgetRoutes from "./water-reminder/WaterReminderWidgetRoutes";
import KeyStrokeWidgetRoutes from "./key-stroke/KeyStrokeWidgetRoutes";
import PhotoWidgetRoutes from "./photo/PhotoWidgetRoutes";
import SitReminderWidgetRoutes from "./sit-reminder/SitReminderWidgetRoutes";
import ClipboardWidgetRoutes from "./clipboard/ClipboardWidgetRoutes";
//FBI WANING! IMPORT PLACE, DONT DELETE THIS LINE

const WidgetRouter = [
    ...LaborProgressWidgetRoutes,
    ...WaveProgressRoute,
    ...TimeProgressWidgetRoutes,
    ...BirthdayListWidgetRoutes,
    ...DynamicIslandWidgetRoutes,
    ...MickeyClockWidgetRoutes,
    ...LyricBookWidgetRoutes,
    ...TodoListWidgetRoutes,
    ...CountdownWidgetRoutes,
    ...Countdown2WidgetRoutes,
    ...PhoneReminderWidgetRoutes,
    ...WaterReminderWidgetRoutes,
    ...KeyStrokeWidgetRoutes,
    // ...CollectionWidgetRoutes,
    ...PhotoWidgetRoutes,
    ...SitReminderWidgetRoutes,
    ...ClipboardWidgetRoutes,
    //FBI WANING! ROUTE PLACE, DONT DELETE THIS LINE
];
export default WidgetRouter
