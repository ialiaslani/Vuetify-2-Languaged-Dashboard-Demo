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
    <v-list id="avatar" class="pa-2 white--text">
      <v-list-group active-class="white--text" class="rounded" :value="true">
        <template v-slot:activator>
          <v-list-item-avatar
            style="max-width: 15px !important"
            class="align-self-center white--text"
            color="white"
            contain
          >
            <v-img
              src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg"
            />
          </v-list-item-avatar>
          <v-list-item-title class="white--text" v-text="$t('Admin')" />
        </template>
        <v-list-item link class="rounded pa-0 d-flex">
          <router-link
            :class="`/${$i18n.locale}/about` === $route.path ? activeClass : ''"
            :to="`/${$i18n.locale}/about`"
            class="text-decoration-none d-flex rounded px-4 py-4 white--text"
            style="min-width: 100%; min-height: 100%"
          >
            <h5 class="mx-1 font-weight-thin">{{ $t("navMP") }}</h5>
            <v-list-item-title class="font-weight-light">{{
              $t("navMyProfile")
            }}</v-list-item-title>
          </router-link>
        </v-list-item>
        <v-list-item link class="rounded pa-0 d-flex">
          <router-link
            :class="
              `/${$i18n.locale}/EditProfile` === $route.path ? activeClass : ''
            "
            :to="`/${$i18n.locale}/EditProfile`"
            class="text-decoration-none d-flex rounded px-4 py-4 white--text"
            style="min-width: 100%; min-height: 100%"
          >
            <h5 class="mx-1 font-weight-thin">{{ $t("navEP") }}</h5>
            <v-list-item-title class="font-weight-light">{{
              $t("navEditProfile")
            }}</v-list-item-title>
          </router-link>
        </v-list-item>

        <v-list-item link class="rounded pa-0 d-flex">
          <router-link
            :class="
              `/${$i18n.locale}/Settings` === $route.path ? activeClass : ''
            "
            :to="`/${$i18n.locale}/Settings`"
            class="text-decoration-none d-flex rounded px-4 py-4 white--text"
            style="min-width: 100%; min-height: 100%"
          >
            <h5 class="mx-1 font-weight-thin">{{ $t("navSE") }}</h5>
            <v-list-item-title class="font-weight-light">{{
              $t("navSettings")
            }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-divider class="mb-2 mx-3" />

    <v-list class="pa-2">
      <v-list-item link class="px-0">
        <router-link
          :class="`/${$i18n.locale}` === $route.path ? activeClass : ''"
          :to="`/${$i18n.locale}`"
          class="text-decoration-none d-flex rounded px-4 white--text"
          style="min-width: 100%"
          ><v-list-item-icon>
            <v-icon dense>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="font-weight-light text--white">{{
            $t("navDashboard")
          }}</v-list-item-title></router-link
        >
      </v-list-item>

      <v-list-group active-class=" white--text" :value="true">
        <template v-slot:activator>
          <v-icon dense class="mr-3">mdi-image</v-icon>
          <v-list-item-title class="font-weight-light">{{
            $t("navPictures")
          }}</v-list-item-title>
        </template>
        <v-list-item-group>
          <v-list-item
            link
            :active-class="activeClass"
            class="rounded white--text"
          >
            <h5 class="mx-1 font-weight-thin">{{ $t("navPR") }}</h5>
            <v-list-item-title class="font-weight-light">{{
              $t("navPricing")
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            :active-class="activeClass"
            class="rounded white--text"
          >
            <h5 class="mx-1 font-weight-thin">{{ $t("navLP") }}</h5>
            <v-list-item-title class="font-weight-light">{{
              $t("navLoginPage")
            }}</v-list-item-title>
          </v-list-item>

          <v-list-item
            link
            :active-class="activeClass"
            class="rounded white--text"
          >
            <h5 class="mx-1 font-weight-thin">{{ $t("navUP") }}</h5>
            <v-list-item-title class="font-weight-light">{{
              $t("navUserPage")
            }}</v-list-item-title>
          </v-list-item>

          <v-list-item
            link
            :active-class="activeClass"
            class="rounded white--text"
          >
            <h5 class="mx-1 font-weight-thin">{{ $t("navEP") }}</h5>
            <v-list-item-title class="font-weight-light">{{
              $t("navErrorPage")
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list-group>

      <v-list-item link class="rounded pa-0">
        <router-link
          :class="`/${$i18n.locale}/Form` === $route.path ? activeClass : ''"
          :to="`/${$i18n.locale}/Form`"
          class="text-decoration-none d-flex rounded px-4 white--text"
          style="min-width: 100%"
        >
          <v-list-item-icon>
            <v-icon dense>mdi-clipboard-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="font-weight-light">{{
            $t("navForms")
          }}</v-list-item-title>
        </router-link>
      </v-list-item>

      <v-list-group active-class=" white--text" :value="true">
        <template v-slot:activator>
          <v-icon dense class="mr-3">mdi-map-marker</v-icon>
          <v-list-item-title class="font-weight-light">{{
            $t("navMaps")
          }}</v-list-item-title>
        </template>
        <v-list-item-group>
          <v-list-item link :active-class="activeClass" class="rounded px-0">
            <router-link
              :class="
                `/${$i18n.locale}/maps` === $route.path ? activeClass : ''
              "
              :to="`/${$i18n.locale}/maps`"
              class="text-decoration-none d-flex rounded px-4 white--text py-4"
              style="min-width: 100%"
            >
              <h5 class="mx-1 font-weight-thin">{{ $t("navGP") }}</h5>
              <v-list-item-title class="font-weight-light">{{
                $t("googleMaps")
              }}</v-list-item-title>
            </router-link>
          </v-list-item>
          <v-list-item
            link
            :active-class="activeClass"
            class="rounded white--text"
          >
            <h5 class="mx-1 font-weight-thin">{{ $t("navFS") }}</h5>
            <v-list-item-title class="font-weight-light">{{
              $t("fullScreenMaps")
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list-group>

      <v-list-item link class="rounded pa-0">
        <router-link
          :class="`/${$i18n.locale}/Widgets` === $route.path ? activeClass : ''"
          :to="`/${$i18n.locale}/Widgets`"
          class="text-decoration-none d-flex rounded px-4 white--text"
          style="min-width: 100%"
        >
          <v-list-item-icon>
            <v-icon dense>mdi-widgets</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="font-weight-light">{{
            $t("navWidgets")
          }}</v-list-item-title>
        </router-link>
      </v-list-item>

      <v-list-item link class="rounded pa-0">
        <router-link
          :class="`/${$i18n.locale}/Charts` === $route.path ? activeClass : ''"
          :to="`/${$i18n.locale}/Charts`"
          class="text-decoration-none d-flex rounded px-4 white--text"
          style="min-width: 100%"
        >
          <v-list-item-icon>
            <v-icon dense>mdi-chart-timeline</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="font-weight-light">{{
            $t("navCharts")
          }}</v-list-item-title>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapGetters, mapState } from "vuex";

export default {
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters(["selectedColor"]),
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
    activeClass() {
      return this.selectedColor + " text--white";
    },
  },
};
</script>

<style>
#avatar .v-list-group__header {
  padding: 0;
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 8px;
}
</style>