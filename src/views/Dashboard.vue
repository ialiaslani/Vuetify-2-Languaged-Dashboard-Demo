<template>
  <div>
    <global-sells />
    <chart-cards />
    <v-row class="mx-4">
      <v-col v-for="wc in widgetCards" :key="wc.icon" xl="3" class="pa-0 my-10">
        <widget-card
          :icon="wc.icon"
          :color="wc.color"
          :number="wc.number"
          class="pa-0"
        />
      </v-col>
    </v-row>
    <h3 class="mx-5 my-9 font-weight-light">{{ $t("ManageListings") }}</h3>
    <v-row class="mx-4">
      <v-col v-for="n in 3" :key="n" class="pa-0 my-10">
        <listing-cards :number="n" />
      </v-col>
    </v-row>
    <DashboardFooter />
    <drawer-setting />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChartCards from "../components/chartCards.vue";
import DashboardFooter from "../components/Footer.vue";
import globalSells from "../components/globalSells.vue";
import ListingCards from "../components/listingCards.vue";
import WidgetCard from "../components/widgetCard.vue";
import DrawerSetting from "./drawerSetting.vue";
export default {
  components: {
    globalSells,
    ChartCards,
    WidgetCard,
    ListingCards,
    DashboardFooter,
    DrawerSetting,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["selectedColor"]),
    widgetCards() {
      return [
        {
          icon: "mdi-twitter",
          color: "cyan",
          number: 5000,
        },
        {
          icon: "mdi-store",
          color: "success",
          number: 3170,
        },
        {
          icon: "mdi-poll",
          color: this.selectedColor,
          number: 75.521,
        },
        {
          icon: "mdi-sofa",
          color: "orange",
          number: 1762,
        },
      ];
    },
  },
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>