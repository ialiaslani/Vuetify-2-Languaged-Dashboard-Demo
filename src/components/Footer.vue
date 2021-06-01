<template>
  <v-footer>
    <v-container>
      <v-row align="center" no-gutters>
        <v-col
          v-for="(link, i) in translatedLinks"
          :key="i"
          class="text-center mb-sm-0 mb-5"
          cols="auto"
        >
          <a
            :href="link.href"
            class="mr-3 grey--text text--darken-3 text-decoration-none"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col cols="12" md="auto">
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
            &copy; {{ $t("made") }}
            <v-icon size="18"> mdi-heart </v-icon>
            {{ $t("by") }}
            <a
              href="https://www.creative-tim.com"
              class="text-decoration-none"
              >{{ $t("CreativeTim") }}</a
            >
            {{ $t("2019") }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import i18n from "../i18n";
export default {
  name: "DashboardFooter",
  computed: {
    translatedLinks() {
      if (i18n.locale == "ps") return this.faLink;
      else if (i18n.locale == "en") return this.links;
    },
  },
  data: () => ({
    links: [
      {
        href: "#",
        text: "Creative Tim",
      },
      {
        href: "#",
        text: "About Us",
      },
      {
        href: "#",
        text: "Blog",
      },
      {
        href: "#",
        text: "Licenses",
      },
    ],
    faLink: [
      {
        href: "#",
        text: "تیم خلاق",
      },
      {
        href: "#",
        text: "درباره ما",
      },
      {
        href: "#",
        text: "بلاگ",
      },
      {
        href: "#",
        text: "اعتبارسنجی",
      },
    ],
  }),
};
</script>

