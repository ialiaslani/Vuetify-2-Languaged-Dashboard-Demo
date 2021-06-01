<template>
  <v-app>
    <drawer />
    <v-main class="pt-0">
      <v-sheet color="grey lighten-3">
        <app-bar />
        <router-view />
      </v-sheet>
    </v-main>
  </v-app>
</template>


<script>
// Utilities
import AppBar from "./views/AppBar.vue";
import Drawer from "./views/Drawer.vue";

export default {
  name: "",
  components: { AppBar, Drawer },
};
</script>

