import { defineStore } from 'pinia';

export type ConfigProps = {
    sidebar_drawer: any;
    mini_sidebar: boolean;
};

export const useConfigStore = defineStore({
    id: 'config',
    state: (): ConfigProps => ({
        sidebar_drawer: null,
        mini_sidebar: false,
    }),
    actions: {
        SET_MINI_SIDEBAR(payload: any) {
            console.log(payload, 'config')
            this.mini_sidebar = payload;
        },
        SET_SIDEBAR_DRAWER() {
            this.sidebar_drawer = !this.sidebar_drawer;
        },
    }
});
