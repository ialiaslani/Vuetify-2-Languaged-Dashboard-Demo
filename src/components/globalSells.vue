<template>
  <v-sheet
    class="mx-5 my-15 rounded pb-5"
    color="white"
    style="position: relative"
    elevation="5"
  >
    <v-sheet
      color="success"
      elevation="5"
      height="90"
      width="90"
      style="position: absolute; top: -5%"
      :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
      class="d-flex justify-center align-center rounded"
    >
      <v-icon color="white" large>mdi-earth</v-icon>
    </v-sheet>
    <h3 class="gray--text mx-16 px-16 mb-13 pt-5 font-weight-light">
      {{ $t("weatherCases") }}
    </h3>
    <v-row>
      <v-col lg="6">
        <v-simple-table class="mx-5">
          <template v-slot:default>
            <thead>
              <tr>
                <th :class="$i18n.locale == 'ps' ? 'text-right' : 'text-left'">
                  {{ $t("flag") }}
                </th>
                <th :class="$i18n.locale == 'ps' ? 'text-right' : 'text-left'">
                  {{ $t("city") }}
                </th>
                <th :class="$i18n.locale == 'ps' ? 'text-right' : 'text-left'">
                  {{ $t("description") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in GlobalWeather" :key="item.name">
                <td><country-flag :country="item.flag" size="normal" /></td>
                <td>{{ item.name }}</td>
                <td>{{ item.data }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col lg="6" class="d-flex justify-center align-center">
        <v-img
          height="300"
          src="../assets/World_map_without_Antarctica.svg"
        ></v-img>
      </v-col> </v-row
  ></v-sheet>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["GlobalWeather"]),
  },
  created() {
    this.GET_WEATHER();
  },
  methods: {
    ...mapActions(["GET_WEATHER"]),
  },
};
</script>

<style>
.left-15 {
  left: 0.75rem;
}
.right-15 {
  right: 0.75rem;
}
</style>