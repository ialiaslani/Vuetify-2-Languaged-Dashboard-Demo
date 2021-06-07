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
      v-model="search"
      required
      @keyup.enter="postExample()"
    >
      <template v-slot:append-outer>
        <v-btn @click="postExample()" class="mt-n2" elevation="1" fab small>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" text :to="`/${$i18n.locale}`">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="ml-2" min-width="0" text>
          <v-badge overlap color="red">
            <template v-slot:badge> 4 </template>
            <v-icon>mdi-bell</v-icon></v-badge
          >
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group active-class="purple white--text">
          <v-list-item link>
            <v-list-item-title>{{ $t("nf1") }}</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>{{ $t("nf2") }}</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>{{ $t("nf3") }}</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>{{ $t("nf4") }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="ml-2" min-width="0" text>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list class="pa-1">
        <v-list-item-group active-class="purple white--text">
          <v-list-item :to="`/${$i18n.locale}/about`" link>
            <v-list-item-title>{{ $t("navMyProfile") }}</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>{{ $t("navSettings") }}</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link>
            <v-list-item-title>{{ $t("Logout") }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

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
    <v-alert
      style="position: fixed; lef: 40%"
      v-model="alertBool"
      type="success"
      dismissible
      >Search Word Was Created</v-alert
    >
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
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
    search: "",
  }),
  created() {
    if (i18n.locale == "ps") this.$vuetify.rtl = true;
    else if (i18n.locale == "en") this.$vuetify.rtl = false;
  },
  computed: {
    ...mapState(["drawer"]),
    ...mapGetters(["alert"]),
    alertBool: {
      get() {
        return this.alert;
      },
      set() {
        this.$store.commit("post_example");
      },
    },
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
    postExample() {
      if (this.search != "") {
        this.$store.dispatch("POST_EXAMPLE", {
          title: "Search",
          userId: 110,
          body: this.search,
        });
        this.search = "";
      } else if (this.search == "") alert("Search Field Is Empty");
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