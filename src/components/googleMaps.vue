<template>
  <div>
    <v-row>
      <v-col>
        <v-sheet
          class="mx-5 my-15 rounded pb-5 pt-16"
          color="white"
          style="position: relative"
          elevation="5"
        >
          <v-sheet
            color="success"
            elevation="5"
            height="90"
            width="150"
            style="position: absolute; top: -5%"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="d-flex justify-center align-center rounded"
          >
            <h4 class="white--text font-weight-light">
              {{ $t("SatelliteMap") }}
            </h4>
          </v-sheet>
          <v-sheet
            color="white"
            elevation="5"
            height="100"
            width="350"
            style="position: absolute; top: 17%; z-index: 2"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="d-flex justify-start align-start rounded-sm mx-3"
          >
            <h4 class="black--text ma-3 font-weight-light">
              {{ $t("UnitedStates") }}
              <p class="caption mx-1 mt-10 blue--text">
                {{ $t("Viewlargermap") }}
              </p>
            </h4>
            <v-spacer></v-spacer>
            <div>
              <v-icon medium color="cyan" class="mt-3 mx-3">
                mdi-call-split
              </v-icon>
              <p class="caption mx-2 blue--text">{{ $t("Directions") }}</p>
            </div>
          </v-sheet>

          <v-sheet
            color="white"
            elevation="5"
            height="100"
            width="60"
            style="position: absolute; bottom: 10%; z-index: 2"
            :class="$i18n.locale != 'ps' ? 'right-15' : 'left-15'"
            class="
              d-flex
              justify-center
              align-center
              flex-column
              rounded-sm
              mx-3
            "
          >
            <v-btn block><v-icon medium color="black"> mdi-plus </v-icon></v-btn
            ><v-btn block
              ><v-icon medium color="black"> mdi-minus </v-icon></v-btn
            >
          </v-sheet>
          <v-sheet
            color="white"
            elevation="5"
            height="60"
            width="60"
            style="position: absolute; bottom: 10%; z-index: 2"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="
              d-flex
              justify-center
              align-center
              flex-column
              rounded-sm
              mx-3
            "
          >
            <v-img src="../assets/acf-google-map-field-interface.png" />
          </v-sheet>
          <v-img
            src="../assets/googleMaps.png"
            width="98%"
            class="mx-auto rounded-sm mt-3"
          ></v-img
        ></v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col xl="6" lg="6" md="6"
        ><v-sheet
          class="mx-5 mb-15 rounded pb-5 pt-16"
          color="white"
          style="position: relative"
          elevation="5"
        >
          <v-sheet
            color="success"
            elevation="5"
            height="90"
            width="150"
            style="position: absolute; top: -5%"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="d-flex justify-center align-center rounded"
          >
            <h4 class="white--text font-weight-light">
              {{ $t("SatelliteMap") }}
            </h4>
          </v-sheet>
          <v-sheet
            color="white"
            elevation="5"
            height="100"
            width="300"
            style="position: absolute; top: 17%; z-index: 2"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="d-flex justify-start align-start rounded-sm mx-3"
          >
            <h4 class="black--text ma-3 font-weight-light">
              {{ $t("UnitedStates") }}
              <p class="caption mx-1 mt-10 blue--text">
                {{ $t("Viewlargermap") }}
              </p>
            </h4>
            <v-spacer></v-spacer>
            <div>
              <v-icon medium color="cyan" class="mt-3 mx-3">
                mdi-call-split
              </v-icon>
              <p class="caption mx-2 blue--text">{{ $t("Directions") }}</p>
            </div>
          </v-sheet>

          <v-sheet
            color="white"
            elevation="5"
            height="100"
            width="60"
            style="position: absolute; bottom: 10%; z-index: 2"
            :class="$i18n.locale != 'ps' ? 'right-15' : 'left-15'"
            class="
              d-flex
              justify-center
              align-center
              flex-column
              rounded-sm
              mx-3
            "
          >
            <v-btn block><v-icon medium color="black"> mdi-plus </v-icon></v-btn
            ><v-btn block
              ><v-icon medium color="black"> mdi-minus </v-icon></v-btn
            >
          </v-sheet>
          <v-sheet
            color="white"
            elevation="5"
            height="60"
            width="60"
            style="position: absolute; bottom: 10%; z-index: 2"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="
              d-flex
              justify-center
              align-center
              flex-column
              rounded-sm
              mx-3
            "
          >
            <v-img src="../assets/acf-google-map-field-interface.png" />
          </v-sheet>
          <v-img
            src="../assets/googleMaps.png"
            width="98%"
            height="400"
            class="mx-auto rounded-sm mt-3"
          ></v-img></v-sheet
      ></v-col>
      <v-col xl="6" lg="6" md="6"
        ><v-sheet
          class="mx-5 mb-15 rounded pb-5 pt-16"
          color="white"
          style="position: relative"
          elevation="5"
        >
          <v-sheet
            color="success"
            elevation="5"
            height="90"
            width="270"
            style="position: absolute; top: -5%"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="d-flex justify-center align-center rounded"
          >
            <h4 class="white--text font-weight-light">
              {{ $t("CustomSkinSettingsMap") }}
            </h4>
          </v-sheet>
          <v-sheet
            color="white"
            elevation="5"
            height="100"
            width="300"
            style="position: absolute; top: 17%; z-index: 2"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="d-flex justify-start align-start rounded-sm mx-3"
          >
            <h4 class="black--text ma-3 font-weight-light">
              {{ $t("UnitedStates") }}
              <p class="caption mx-1 mt-10 blue--text">
                {{ $t("Viewlargermap") }}
              </p>
            </h4>
            <v-spacer></v-spacer>
            <div>
              <v-icon medium color="cyan" class="mt-3 mx-3">
                mdi-call-split
              </v-icon>
              <p class="caption mx-2 blue--text">{{ $t("Directions") }}</p>
            </div>
          </v-sheet>

          <v-sheet
            color="white"
            elevation="5"
            height="100"
            width="60"
            style="position: absolute; bottom: 10%; z-index: 2"
            :class="$i18n.locale != 'ps' ? 'right-15' : 'left-15'"
            class="
              d-flex
              justify-center
              align-center
              flex-column
              rounded-sm
              mx-3
            "
          >
            <v-btn block><v-icon medium color="black"> mdi-plus </v-icon></v-btn
            ><v-btn block
              ><v-icon medium color="black"> mdi-minus </v-icon></v-btn
            >
          </v-sheet>

          <v-sheet
            color="white"
            elevation="5"
            height="60"
            width="60"
            style="position: absolute; bottom: 10%; z-index: 2"
            :class="$i18n.locale == 'ps' ? 'right-15' : 'left-15'"
            class="
              d-flex
              justify-center
              align-center
              flex-column
              rounded-sm
              mx-3
            "
          >
            <v-img src="../assets/acf-google-map-field-interface.png" />
          </v-sheet>
          <v-img
            src="../assets/googleMaps.png"
            width="98%"
            height="400"
            class="mx-auto rounded-sm mt-3"
          ></v-img></v-sheet
      ></v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>