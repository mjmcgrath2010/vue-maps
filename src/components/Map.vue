<template>
 <div class="map" :id="mapId"></div>
</template>

<script>
export default {
  name: 'Map',
  props: ['name'],
  data() {
    return {
      mapId: this.name,
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
  },
};
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Slightly changed CSS to fit my chosen layout*/
.map {
  height: 100vh;
  width: 100%; 
  z-index: 1000;
}
</style>
