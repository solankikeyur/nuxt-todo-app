<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation class="navbar" v-model="value" grow>
      <v-btn to="/"> Home </v-btn>
      <v-btn to="/about"> About </v-btn>
      <v-btn to="/contact"> Contact </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup>
const value = useState("value", () => 1);
</script>

<style scoped>
.navbar {
    background-color: #2B3467;
}
.v-btn--active {
    background-color: #EB455F;
}
.v-btn {
    color: #FCFFE7;
}
</style>
