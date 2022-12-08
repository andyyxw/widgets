import BirthdayListWidget from './BirthdayListWidget.vue';


console.log()

export default {
    title: 'Widget/BirthdayList',
    component: BirthdayListWidget,
    argTypes: {
    },
};

export const Widget = (args: any) => ({
    components: {BirthdayListWidget},
    setup() {
        return {args};
    },
    template: '<birthday-list-widget v-bind="args"></birthday-list-widget>',
});

Widget.parameters = {
    design: [
        {
            name: "蓝湖",
            type: "link",
            url: "https://share.lanhuapp.com/#/invite?sid=X0xtlll",
        }
    ],
}


