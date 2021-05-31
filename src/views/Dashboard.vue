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
    <h3 class="mx-4 font-weight-light">{{ $t("ManageListings") }}</h3>
    <v-row class="mx-4">
      <v-col v-for="wc in 3" :key="wc" class="pa-0 my-10">
        <listing-cards />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ChartCards from "../components/chartCards.vue";
import globalSells from "../components/globalSells.vue";
import ListingCards from "../components/listingCards.vue";
import WidgetCard from "../components/widgetCard.vue";
export default {
  components: { globalSells, ChartCards, WidgetCard, ListingCards },
  data() {
    return {
      widgetCards: [
        {
          icon: "mdi-twitter",
          color: "info",
          number: 5000,
        },
        {
          icon: "mdi-store",
          color: "success",
          number: 3170,
        },
        {
          icon: "mdi-poll",
          color: "primary",
          number: 75.521,
        },
        {
          icon: "mdi-sofa",
          color: "orange",
          number: 1762,
        },
      ],
    };
  },
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>