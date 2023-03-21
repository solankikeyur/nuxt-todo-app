<template>
  <head>
    <title>Nuxt Todo | Login</title>
  </head>
  <v-container class="login">
    <h1 class="mb-4">Login</h1>
    <v-form @submit.prevent="submit" ref="form">
      <v-text-field
        type="email"
        v-model="email"
        :rules="emailRule"
        label="Email"
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="password"
        :rules="passwordRule"
        label="Password"
      ></v-text-field>
      <v-btn type="submit" :disabled="loading" class="mt-2 login-btn">Login</v-btn>
      <v-btn to="/auth/signup" :disabled="loading" type="button" class="mt-2 signup-btn ml-2">Sign Up</v-btn>
    </v-form>
  </v-container>
</template>

<style scoped>
.login-btn {
  background-color: #eb455f;
  color: white;
}
</style>

<script setup>
import userStore from "@/stores/user";
definePageMeta({
  layout: "guest",
  middleware: "guest"
});
const form = ref(null);
const email = useState("email", () => "");
const loading = useState("loading", () => false);
const emailRule = [
  (value) => {
    if (value) {
      if (value.length > 0) {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
    return "This field is required.";
  },
];
const passwordRule = [
  (value) => {
    if (value) {
        if(value.length > 6) return true;
        return "Password should be greater than 6."
    };
    return "This field is required.";
  },
];
const password = useState("password", () => "");

const submit = async () => {
  const {valid} = await form.value.validate();
  if(valid) {
    loading.value = true;
    const {data,error} = await useSupabaseClient().auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    if(error) {
      alert(error.message);
    }
    if(data.session && data.user) {
      userStore().setUser(data.user);
      await navigateTo({ path: '/', replace: true });
    }
    loading.value = false;
  }
};
</script>
