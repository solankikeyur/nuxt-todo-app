<template>
  <head>
    <title>Nuxt App | Contact</title>
  </head>

  <v-card class="mx-auto">
    <v-img class="align-end text-white" cover height="400" src="/img/contact.jpg" >
    </v-img>
    <div>
      <v-chip-group class="contact-btns my-4">
        <a href="https://www.instagram.com/_solanki_keyur_" target="_blank"><v-btn icon="mdi-instagram" class="mx-2 instagram" ></v-btn></a>
        <a href="https://www.linkedin.com/in/solankikeyur8/" target="_blank"><v-btn icon="mdi-linkedin" class="mx-2 linkedin" ></v-btn></a>
        <a target="_blank" href="https://www.facebook.com/keyur.solanki.735"><v-btn icon="mdi-facebook" class="mx-2 facebook" ></v-btn></a>
      </v-chip-group>
    </div>
  </v-card>
</template>

<style scoped>
.contact-btns {
    display: block;
    margin: auto;
    text-align: center;
}

.instagram {
    background: #d6249f;
    color: #fff;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
}

.linkedin {
    color: white;
    background-color: #0072b1;
}

.facebook {
    color: white;
    background-color: #4267B2;
}
a {
  text-decoration: none;
}
</style>

<script setup>
definePageMeta({
  middleware: "auth"
})
</script>
