<template>
  <head>
    <title>Nuxt App | About</title>
  </head>
  <v-card class="mx-auto">
    <v-img
      class="align-end text-white"
      height="400"
      src="/img/about.jpg"
      cover
    >
    </v-img>

    <v-card-text >
      <div class="about-text">This Simple Todo App is created using Nuxt 3 and uses browser local storage for storing. With this app you can create, update or delete todo. You can also mark todo as completed if its done. You can also filter you todo based on completed, all and remaining. For state management tool used Pinia.</div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.about-text {
    font-size: 20px;
}
</style>
 