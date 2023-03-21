import { defineStore } from "pinia";

export default defineStore("users", {
    state: () => ({
        user: null
    }),
    getters: {
        getUserId() {
            return this.user.id;
        }
    },
    actions: {
        setUser(userData) {
            if(userData) {
                this.user = userData;
            } else {
                this.user = null;
            }
        }
    }
})