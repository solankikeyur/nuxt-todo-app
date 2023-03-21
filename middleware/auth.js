import userStore from "@/stores/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = userStore().user;
    if(!user) {
        if(!useSupabaseUser().value) {
            return navigateTo("/auth/login");
        }
        userStore().setUser(useSupabaseUser().value);
    }
});