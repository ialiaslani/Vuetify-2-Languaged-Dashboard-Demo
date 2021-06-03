<template>
  <v-row class="mx-2 mb-5">
    <v-col xl="3"
      ><v-card
        elevation="5"
        class="chartCard mt-4 mx-auto"
        max-width="500"
        min-width="300"
      >
        <v-sheet
          class="v-sheet--offset mx-auto d-flex"
          color="cyan"
          elevation="12"
          max-width="calc(100% - 32px)"
          min-height="150"
          style="z-index: 2"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
            auto-draw
          ></v-sparkline>
        </v-sheet>
        <v-row
          style="position: absolute; top: 43%; left: 38%"
          height="20px"
          align="center"
          justify="center"
        >
          <div class="mx-2"></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="success"
                >mdi-pencil</v-icon
              >
            </template>
            <span>Edti icon Button</span>
          </v-tooltip>
          <div class="mx-2"></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="cyan"
                >mdi-share-variant</v-icon
              >
            </template>
            <span>Share icon Button</span>
          </v-tooltip></v-row
        >
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
        class="chartCard mt-4 mx-auto"
        max-width="500"
        min-width="300"
      >
        <v-sheet
          class="v-sheet--offset mx-auto d-flex"
          color="success"
          elevation="12"
          max-width="calc(100% - 32px)"
          min-height="150"
          style="z-index: 2"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
            :smooth="true"
            auto-draw
          ></v-sparkline>
        </v-sheet>
        <v-row
          style="position: absolute; top: 43%; left: 38%"
          height="20px"
          align="center"
          justify="center"
        >
          <div class="mx-2"></div>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="success"
                >mdi-pencil</v-icon
              >
            </template>
            <span>Edti icon Button</span>
          </v-tooltip>
          <div class="mx-2"></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="cyan"
                >mdi-share-variant</v-icon
              >
            </template>
            <span>Share icon Button</span>
          </v-tooltip>
        </v-row>
        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">{{ $t("DailySells") }}</div>
          <div class="subheading font-weight-light grey--text">
            {{ $t("sells") }}
          </div>
          <v-divider class="my-2"></v-divider>
          <v-icon class="mr-2" small> mdi-clock </v-icon>
          <span class="caption grey--text font-weight-light">
            {{ $t("lastUp4") }}</span
          >
        </v-card-text>
      </v-card></v-col
    >
    <v-col xl="3"
      ><v-card
        elevation="5"
        class="chartCard mt-4 mx-auto"
        max-width="500"
        min-width="300"
      >
        <v-sheet
          class="v-sheet--offset mx-auto d-flex"
          color="red"
          elevation="12"
          max-width="calc(100% - 32px)"
          min-height="150"
          style="z-index: 2"
        >
          <v-sparkline
            :fill="fill"
            color="white"
            :smooth="radius || false"
            :value="val"
            auto-draw
            :labels="labels"
            line-width="2"
            padding="16"
          ></v-sparkline>
        </v-sheet>
        <v-row
          style="position: absolute; top: 43%; left: 38%"
          height="20px"
          align="center"
          justify="center"
        >
          <div class="mx-2"></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="success"
                >mdi-pencil</v-icon
              >
            </template>
            <span>Edti icon Button</span>
          </v-tooltip>
          <div class="mx-2"></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="cyan"
                >mdi-share-variant</v-icon
              >
            </template>
            <span>Share icon Button</span>
          </v-tooltip>
        </v-row>
        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">
            {{ $t("CompeletedTask") }}
          </div>
          <div class="subheading font-weight-light grey--text">
            {{ $t("LastLastCampaignPerformance") }}
          </div>
          <v-divider class="my-2"></v-divider>
          <v-icon class="mr-2" small> mdi-clock </v-icon>
          <span class="caption grey--text font-weight-light">{{
            $t("lastUp10")
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
      fill: true,
      padding: 8,
      radius: 10,
      val: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    };
  },
};
</script>

<style>
.v-sheet--offset {
  transition: 300ms;
}
.chartCard:hover .v-sheet--offset {
  top: -60px;
  position: relative;
}
</style>