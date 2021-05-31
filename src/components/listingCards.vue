<template>
  <v-card
    class="mx-auto rounded-lg listing-card"
    max-width="350"
    style="position: relative"
    elevation="5"
  >
    <v-img
      class="white--text align-end rounded-lg listing-card-img"
      height="200px"
      width="95%"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>
    <v-sheet height="200px" class="d-flex flex-column">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-row height="20px" align="center" justify="center">
        <v-icon color="info">mdi-account</v-icon>
        <div class="mx-2"></div>
        <v-icon color="info">mdi-pencil</v-icon>
        <div class="mx-2"></div>
        <v-icon color="info">mdi-share-variant</v-icon>
      </v-row>
    </v-sheet>
    <v-card-title>{{ $t("cardTitle") }}</v-card-title>

    <v-card-subtitle class="pb-0">{{ $t("cardDate") }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ $t("cardlocation") }}</div>

      <div>{{ $t("cardAddress") }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="gray" text> {{ $t("share") }} </v-btn>

      <v-btn color="gray" text> {{ $t("explore") }} </v-btn>
    </v-card-actions>
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
}
.listing-card:hover .listing-card-img {
  top: -15%;
}
</style>