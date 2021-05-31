<template>
  <v-sheet
    class="rounded-lg"
    color="white"
    style="position: relative; margin: 0 auto !important"
    elevation="5"
    height="150"
    width="300"
  >
    <v-sheet
      :color="color"
      elevation="5"
      height="100"
      width="100"
      style="position: absolute; top: -5%"
      :class="$i18n.locale == 'ps' ? 'right-5' : 'left-5'"
      class="d-flex justify-center align-center rounded-lg"
    >
      <v-icon color="white" large>{{ icon }}</v-icon> </v-sheet
    ><v-row
      ><v-col cols="6"></v-col>
      <v-col cols="6">
        <h4 class="gray--text mt-5 font-weight-light">{{ $t("followers") }}</h4>
        <h3 class="gray--text">
          {{ number }}
        </h3>
      </v-col>
    </v-row>
    <v-divider class="mt-8 mx-2" />
    <v-row>
      <v-col>
        <h6 class="gray--text mt-2 mx-3 font-weight-light">{{ $t("jsutUpdated") }}</h6>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    color: {
      type: String,
    },
    number: {
      type: Number,
    },
  },
};
</script>

<style>
.left-5 {
  left: 5%;
}
.right-5 {
  right: 5%;
}
</style>