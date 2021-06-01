<template>
  <v-app-bar
    style="position: relative"
    app
    color="transparent"
    flat
    height="75"
    :class="$i18n.locale == 'ps' ? 'right-0' : 'left-0'"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
      v-if="isMobile > 600"
    >
      <v-icon v-if="drawer"> mdi-view-quilt </v-icon>

      <v-icon v-else> mdi-dots-vertical </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light mx-2"
      v-text="$route.name"
    />

    <v-spacer />

    <v-text-field
      :label="$t('search')"
      color="secondary"
      hide-details
      style="max-width: 165px"
    >
      <template v-slot:append-outer>
        <v-btn class="mt-n2" elevation="1" fab small>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" text :to="`/${$i18n.locale}/`">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="ml-2" min-width="0" text>
          <v-badge overlap color="red">
            <template v-slot:badge> 5 </template>
            <v-icon>mdi-bell</v-icon></v-badge
          >
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" link>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn class="ml-2" min-width="0" text :to="`/${$i18n.locale}/about`">
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <div class="mx-3" />

    <v-overflow-btn
      :items="$i18n.availableLocales"
      :label="$i18n.locale"
      v-model="$i18n.locale"
      @change="setRouterParam($i18n.locale)"
      hide-details
      class="pa-0 mx-2"
      overflow
      style="max-width: 100px"
    ></v-overflow-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import i18n from "../i18n";
export default {
  name: "Dashboard",

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    items: [
      { title: "Mike John Responded to your email" },
      { title: "You have 5 new tasks" },
      { title: "You're now friends with Andrew" },
      { title: "Another Notification" },
    ],
  }),
  created() {
    if (i18n.locale == "ps") this.$vuetify.rtl = true;
    else if (i18n.locale == "en") this.$vuetify.rtl = false;
  },
  computed: {
    ...mapState(["drawer"]),
    isMobile() {
      return window.innerWidth;
    },
  },

  methods: {
    ...mapMutations({
      setDrawer: "set_drawer",
    }),
    setRouterParam(val) {
      if (val == "ps") this.$vuetify.rtl = true;
      else if (val == "en") this.$vuetify.rtl = false;
      this.$router.push({ params: { lng: val } });
    },
  },
};
</script>


<style>
.v-autocomplete.v-select.v-input--is-focused input {
  min-width: 10px !important;
}
.right-0 {
  right: 0 !important;
}
.left-0 {
  left: 0 !important;
}
</style>