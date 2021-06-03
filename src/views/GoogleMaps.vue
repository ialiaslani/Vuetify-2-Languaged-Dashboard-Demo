<template>
  <div>
    <google-maps />
    <dashboardFooter />
  </div>
</template>

<script>
import dashboardFooter from "../components/Footer.vue";
import googleMaps from "../components/googleMaps.vue";
export default {
  components: { googleMaps, dashboardFooter },
};
</script>

<style>
</style>