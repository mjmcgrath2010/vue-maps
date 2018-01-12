<template>
  <div class="map-container">
    <div class="map" :id="mapId"></div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'Map',
  props: ['name'],
  data() {
    return {
      mapId: this.name,
      map: undefined,
    };
  },
  mounted() {
    // Getting reference to the dom element we'll use to set up the map
    const element = document.getElementById(this.mapId);
    //Setting up map options
    const mapOptions = {
      center: {
        lat: -34.397,
        lng: 150.644, 
      },
      scrollwheel: false,
      zoom: 8,
    };
    // Create a map object and specify the DOM element for display.
    const map = new google.maps.Map(element, mapOptions);
    Vue.set(this, 'map', map);
  },
};
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Slightly changed CSS to fit my chosen layout*/
.map {
  height: 100vh;
  width: 100%; 
}

.map-container {
  position: fixed;
  height: 100vh;
  width: 100%; 
}
</style>
