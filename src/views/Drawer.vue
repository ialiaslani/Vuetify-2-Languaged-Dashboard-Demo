<template>
  <v-navigation-drawer
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
    <v-list dense nav>
      <v-list-item>
        <v-list-item-content class="pa-0">
          <v-list-item-title
            ><h3 class="title ma-3 white--text">
              {{ $t("title") }}
            </h3></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1 mx-3" />
    <v-list id="avatar" class="pa-2">
      <v-list-item-group active-class=" white--text" multiple>
        <v-list-group class="rounded-lg" :value="true">
          <template v-slot:activator>
            <v-list-item-avatar
              style="max-width: 15px !important"
              class="align-self-center"
              color="white"
              contain
            >
              <v-img
                src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg"
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="$t('Admin')" />
          </template>
          <v-list-item class="rounded-lg" link>
            <h5 class="mx-1 font-weight-thin">MP</h5>
            <v-list-item-title class="font-weight-light"
              >My Profile</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="rounded-lg" link>
            <h5 class="mx-1 font-weight-thin">EP</h5>
            <v-list-item-title class="font-weight-light"
              >Edit Profile</v-list-item-title
            >
          </v-list-item>

          <v-list-item class="rounded-lg" link>
            <h5 class="mx-1 font-weight-thin">SE</h5>
            <v-list-item-title class="font-weight-light"
              >Settings</v-list-item-title
            >
          </v-list-item>
        </v-list-group>
      </v-list-item-group>
    </v-list>

    <v-divider class="mb-2 mx-3" />

    <v-list class="pa-2">
      <v-list-item-group active-class="pink white--text" multiple>
        <v-list-item link class="rounded-lg">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="font-weight-light"
            >Dashboard</v-list-item-title
          >
        </v-list-item>

        <v-list-group :value="true" prepend-icon="mdi-image">
          <template v-slot:activator>
            <v-list-item-title class="font-weight-light"
              >Pictures</v-list-item-title
            >
          </template>

          <v-list-item class="rounded-lg">
            <h5 class="mx-1 font-weight-thin">PR</h5>
            <v-list-item-title class="font-weight-light"
              >Pricing</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="rounded-lg">
            <h5 class="mx-1 font-weight-thin">LP</h5>
            <v-list-item-title class="font-weight-light"
              >Login Page</v-list-item-title
            >
          </v-list-item>

          <v-list-item class="rounded-lg">
            <h5 class="mx-1 font-weight-thin">UP</h5>
            <v-list-item-title class="font-weight-light"
              >User Profile</v-list-item-title
            >
          </v-list-item>

          <v-list-item class="rounded-lg">
            <h5 class="mx-1 font-weight-thin">EP</h5>
            <v-list-item-title class="font-weight-light"
              >Error Profile</v-list-item-title
            >
          </v-list-item>
        </v-list-group>
      </v-list-item-group>

      <v-list-item link class="rounded-lg">
        <v-list-item-icon>
          <v-icon>mdi-clipboard-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-title class="font-weight-light">Forms</v-list-item-title>
      </v-list-item>

      <v-list-item link class="rounded-lg">
        <v-list-item-icon>
          <v-icon>mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-title class="font-weight-light">Maps</v-list-item-title>
      </v-list-item>

      <v-list-item link class="rounded-lg">
        <v-list-item-icon>
          <v-icon>mdi-widgets</v-icon>
        </v-list-item-icon>

        <v-list-item-title class="font-weight-light">Widgets</v-list-item-title>
      </v-list-item>

      <v-list-item link class="rounded-lg">
        <v-list-item-icon>
          <v-icon>mdi-chart-timeline</v-icon>
        </v-list-item-icon>

        <v-list-item-title class="font-weight-light">Charts</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
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
  },
};
</script>

<style>
#avatar .v-list-group__header {
  padding: 0;
}
</style>