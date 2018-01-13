<template>
  <div class="map-container">
    <div class="map" :id="mapId"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';

export default {
  name: 'Map',
  props: ['name'],
  data() {
    return {
      mapId: this.name,
      map: undefined,
      mapCenter: {
        lat: -34.397,
        lng: 150.644,
      },
      zoomLevel: 8,
    };
  },
  created(){
    // Set up listener for add-pins event from parent.
    this.$parent.$on('add-pins', this.addPins);
  },
  mounted() {
    // Getting reference to the dom element we'll use to set up the map
    const element = document.getElementById(this.mapId);
    //Setting up map options and reading dynamic properties from data
    const mapOptions = {
      center: this.mapCenter,
      scrollwheel: false,
      zoom: this.zoomLevel,
    };
    // Create a map object and specify the DOM element for display.
    const map = new google.maps.Map(element, mapOptions);
    Vue.set(this, 'map', map);
  },
  methods: {
    addPins(data){
      const targetMap = this.map;
      let processedData;

      if (!data) {
        return;
      }; 
      processedData = data.pins;
      // I prefer to use lodash when I can to avoid browser compaitiabilty nightmares :)
      _.forEach(processedData, function(value, index) {
        let marker = new google.maps.Marker({
          position: value,
          map: targetMap
        });
      });
    },
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
