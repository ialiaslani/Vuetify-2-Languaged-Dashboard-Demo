<template>
  <div>
    <v-sheet
      color="grey darken-2 rounded-lg"
      height="40"
      width="80"
      :class="$i18n.locale == 'ps' ? 'left-1' : 'right-1'"
      style="
        opacity: 0.75;
        position: fixed;
        top: 23%;
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
      :class="$i18n.locale == 'ps' ? 'left-3' : 'right-3'"
      style="position: fixed; top: 23%; z-index: 100; cursor: pointer"
      class="px-3"
    >
      <v-divider color="black" class="mt-3"></v-divider>
      <h3 class="font-weight-light text-center d-block mt-4 mb-10">
        {{ $t("Color") }}
      </h3>
      <div class="d-flex my-3">
        <v-btn
          class="rounded-circle mx-auto"
          x-small
          fab
          color="purple"
          @click="setColor('purple')"
        ></v-btn>

        <v-btn
          class="rounded-circle mx-auto"
          x-small
          fab
          color="pink"
          @click="setColor('pink')"
        ></v-btn>
        <v-btn
          class="rounded-circle mx-auto"
          x-small
          fab
          color="orange"
          @click="setColor('orange')"
        ></v-btn>
        <v-btn
          class="rounded-circle mx-auto"
          x-small
          fab
          color="red"
          @click="setColor('red')"
        ></v-btn>
        <v-btn
          class="rounded-circle mx-auto"
          x-small
          fab
          color="cyan"
          @click="setColor('cyan')"
        ></v-btn>
      </div>
      <v-divider color="black" class="mt-4"></v-divider>
      <h3 class="font-weight-light text-center d-block my-4">
        {{ $t("Images") }}
      </h3>
      <v-row>
        <v-col v-for="n in 4" :key="n" class="d-flex child-flex" cols="3">
          <v-img
            :src="`https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-${n}.jpg`"
            aspect-ratio="1"
            class="grey lighten-2"
            min-width="25%"
            height="150px"
            border="bottom"
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
    setColor(color) {
      console.log(color);
      this.$store.commit("setColor", color);
    },
  },
};
</script>

<style scoped>
.right-1 {
  right: -1%;
}
.left-1 {
  left: -1%;
}
.right-3 {
  right: 3%;
}
.left-3 {
  left: 3%;
}
</style>