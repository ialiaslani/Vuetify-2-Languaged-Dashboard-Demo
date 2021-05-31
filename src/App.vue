<template>
  <v-app>
    
    <v-navigation-drawer
      id="navigation-drawer"
      :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
      :expand-on-hover="drawer"
      :right="$vuetify.rtl"
      :src="barImage"
      mobile-breakpoint="960"
      app
      width="260"
      style="z-index: 51"
    >
      <v-divider class="mb-2" />
      <h3 class="title ma-3 white--text">{{ $t("title") }}</h3>
      <template v-slot:img="props">
        <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
      </template>

      <v-divider class="mb-1" />
      <v-list dense nav>
        <v-list-item>
          <v-list-item-avatar class="align-self-center" color="white" contain>
            <v-img src="./assets/logo.png" max-height="30" />
          </v-list-item-avatar>

          <v-list-item-content class="pa-0">
            <v-list-item-title v-text="$t('Admin')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider class="mb-2" />

      <v-list flat>
        <v-list-item-group color="indigo">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
import { mapState } from "vuex";
import AppBar from "./views/AppBar.vue";

export default {
  name: "DashboardCoreDrawer",
  components: { AppBar },
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("set_drawer", val);
      },
    },
    profile() {
      return {
        avatar: true,
        title: "Ali Aslani",
      };
    },
    items() {
      return this.$t("nav");
    },
  },
};
</script>

