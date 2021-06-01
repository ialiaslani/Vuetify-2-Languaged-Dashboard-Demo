<template>
  <v-sheet
    class="rounded mx-2"
    color="white"
    style="position: relative"
    elevation="5"
    height="135"
    min-width="280"
  >
    <v-sheet
      :color="color"
      elevation="5"
      height="100"
      width="100"
      style="position: absolute; top: -13%"
      :class="$i18n.locale == 'ps' ? 'right-5' : 'left-5'"
      class="d-flex justify-center align-center rounded"
    >
      <v-icon color="white" large>{{ icon }}</v-icon> </v-sheet
    ><v-row
      ><v-col cols="6"></v-col>
      <v-col
        cols="6"
        class="d-flex flex-column px-8"
        justify="start"
        align="end"
      >
        <h4 class="gray--text font-weight-light">{{ $t("followers") }}</h4>
        <h3 class="gray--text">
          {{ number }}
        </h3>
      </v-col>
    </v-row>
    <v-divider class="mt-8 mx-2 mb-1" />
    <v-row>
      <v-col class="d-flex"
        ><v-icon color="gray" class="mx-2"> mdi-clock </v-icon>
        <h6 class="gray--text mt-1 font-weight-light">
          {{ $t("jsutUpdated") }}
        </h6>
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
  left: 4%;
}
.right-5 {
  right: 4%;
}
</style>