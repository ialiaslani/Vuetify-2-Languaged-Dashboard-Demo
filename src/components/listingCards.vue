<template>
  <v-card
    class="mx-2 rounded listing-card"
    min-width="300"
    style="position: relative"
    elevation="5"
  >
    <v-img
      class="white--text align-end rounded-lg listing-card-img"
      height="250px"
      width="95%"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>
    <v-sheet height="240px" class="d-flex flex-column">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-row height="30px" align="center" justify="center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="pt-10" v-bind="attrs" v-on="on" color="red"
              >mdi-close</v-icon
            >
          </template>
          <span>Delete icon Button</span>
        </v-tooltip>
        <div class="mx-2"></div>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="pt-10" v-bind="attrs" v-on="on" color="success"
              >mdi-pencil</v-icon
            >
          </template>
          <span>Edit icon Button</span>
        </v-tooltip>
        <div class="mx-2"></div>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="pt-10" v-bind="attrs" v-on="on" color="info"
              >mdi-share-variant</v-icon
            >
          </template>
          <span>Share icon Button</span>
        </v-tooltip>
      </v-row>
    </v-sheet>
    <v-card-title class="font-weight-light d-block text-center">{{
      $t("cardTitle")
    }}</v-card-title>

    <v-card-text class="text--muted font-weight-light d-block text-center">
      {{ $t("cardAddress") }}
    </v-card-text>
    <v-divider class="mx-2"></v-divider>
    <v-card-subtitle class="d-flex"
      >{{ $t("cardDate") }} <v-spacer></v-spacer>
      <v-icon color="muted mx-1">mdi-map-marker</v-icon>
      {{ $t("cardlocation") }}</v-card-subtitle
    >
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.listing-card-img {
  position: absolute;
  left: 2.5%;
  top: -5%;
  transition: 300ms;
  z-index: 50;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%) !important;
}
.listing-card:hover .listing-card-img {
  top: -15%;
}
</style>