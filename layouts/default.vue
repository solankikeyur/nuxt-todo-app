<template>
  <v-layout>
    <v-app-bar color="#2B3467">
      <v-app-bar-title class="title">Nuxt Todo App</v-app-bar-title>
      <template v-slot:prepend>
        </template>
      <v-btn icon class="logout-icon" @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main style="height: 100%">
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
  <TheBottomNavbar></TheBottomNavbar>
</template>

<style>
body {
  background-color: #fcffe7;
}
.logout-icon {
  color: white;
}
.title {
  color: white;
}
</style>

<script setup>
import userStore from "@/stores/user"
const logout = async () => {
  await useSupabaseClient().auth.signOut();
  userStore().setUser(null);
  await navigateTo("/auth/login");
}
</script>
