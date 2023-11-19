import { defineStore } from 'pinia';
import router from '@/router';
import checkUser from '@/utils/check-auth';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        user: JSON.parse(localStorage.getItem('vue_admin_user')),
        returnUrl: null
    }),
    actions: {
        login(username: string, password: string) {
            const response = checkUser(username, password)
            console.log(response, username, password)
            if (response?.status == 'error') {
                return {status: response.status, message: response.message}
            }

            // update pinia state
            this.user = response?.user;
            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('vue_admin_user', JSON.stringify(response?.user));
            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/apps/contacts');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('vue_admin_user');
            router.push('/');
        }
    }
});
