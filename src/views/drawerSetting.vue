<template>
  <div>
    <v-sheet
      color="grey darken-2 rounded-lg"
      height="40"
      width="80"
      style="
        opacity: 0.75;
        position: fixed;
        top: 23%;
        right: -1%;
        z-index: 100;
        cursor: pointer;
      "
      @click="toggoleDrawerSetting()"
    >
    </v-sheet>
    <v-sheet
      v-if="DRBool"
      color="white rounded"
      width="300"
      elevation="5"
      style="
        position: fixed;
        top: 23%;
        right: 3%;
        z-index: 100;
        cursor: pointer;
      "
      class="px-3"
    >
      <v-divider color="black" class="mt-3"></v-divider>
      <h3 class="font-weight-light text-center d-block my-4">Images</h3>
      <v-row>
        <v-col v-for="n in 4" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-${n}.jpg`"
            aspect-ratio="1"
            class="grey lighten-2"
            @click="
              setBarImage(
                `https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-${n}.jpg`
              )
            "
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
      <v-divider color="black" class="my-3"></v-divider>
    </v-sheet>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      DRBool: false,
    };
  },
  methods: {
    ...mapMutations(["setBarImage"]),
    toggoleDrawerSetting() {
      this.DRBool = !this.DRBool;
    },
  },
};
</script>

<style>
</style>