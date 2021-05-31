<template>
  <v-row class="mx-5 mb-5">
    <v-col xl="3"
      ><v-card
        elevation="5"
        class="mt-4 mx-auto"
        max-width="400"
        min-width="300"
      >
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="cyan"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">
            {{ $t("UserRegister") }}
          </div>
          <div class="subheading font-weight-light grey--text">
            {{ $t("LastCampaignPerformance") }}
          </div>
          <v-divider class="my-2"></v-divider>
          <v-icon class="mr-2" small> mdi-clock </v-icon>
          <span class="caption grey--text font-weight-light">{{
            $t("lastRegiter")
          }}</span>
        </v-card-text>
      </v-card></v-col
    >
    <v-col xl="3"
      ><v-card
        elevation="5"
        class="mt-4 mx-auto"
        max-width="400"
        min-width="300"
      >
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="success"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">
            {{ $t("UserRegister") }}
          </div>
          <div class="subheading font-weight-light grey--text">
            {{ $t("LastCampaignPerformance") }}
          </div>
          <v-divider class="my-2"></v-divider>
          <v-icon class="mr-2" small> mdi-clock </v-icon>
          <span class="caption grey--text font-weight-light">{{
            $t("lastRegiter")
          }}</span>
        </v-card-text>
      </v-card></v-col
    >
    <v-col xl="3"
      ><v-card
        elevation="5"
        class="mt-4 mx-auto"
        max-width="400"
        min-width="300"
      >
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="red"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">
            {{ $t("UserRegister") }}
          </div>
          <div class="subheading font-weight-light grey--text">
            {{ $t("LastCampaignPerformance") }}
          </div>
          <v-divider class="my-2"></v-divider>
          <v-icon class="mr-2" small> mdi-clock </v-icon>
          <span class="caption grey--text font-weight-light">{{
            $t("lastRegiter")
          }}</span>
        </v-card-text>
      </v-card></v-col
    >
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
      totalDesserts: 0,
    };
  },
};
</script>

<style>
</style>