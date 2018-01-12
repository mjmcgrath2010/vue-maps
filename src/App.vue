<template>
  <div id="app">
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4>
          <v-layout>
            <v-flex offset-xs1 xs10>
              <search :autoComplete="filterResults" :dataSource="sampleData"></search>
              <div  v-for="item in filteredData" :key="item.id">
                 <location-card
              :locationName="item.name"
              ></location-card>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12 md8>
          <Map name="ground-signal"></Map>
        </v-flex>
      </v-layout>
    </v-container>
    <pre>
      <code>
        {{$data}}
      </code>
    </pre>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import Map from './components/Map';
import LocationCard from './components/LocationCard';
import Search from './components/Search';

export default {
  name: 'app',
  components: {
    Map,
    LocationCard,
    Search
  },
  data() {
    return {
      sampleData: [],
      filteredData: [],
    };
  },
  methods: {
    fetchData(cb) {
      // Ensuring we have a refrence to the proper scope for handling response data
      const that = this;
      // Fetching data from mock API (see static/sample-data.json)
      axios
        .get("static/sample-data.json")
        .then(response => {
          if (response && response.data) {
            Vue.set(that, "sampleData", response.data);
            Vue.set(that, "filteredData", response.data);
            cb();
          }
        })
        // This should be handled better, chose to leave out setting error states and messgaes for sake of time
        .catch(err => console.log(err));
    },
    filterResults(e){
      const locations = this.filteredData;
      const input = e.toLowerCase().trim();
      // Filtering Data and only returning matches
      const search = locations.filter(place => {
        const name = place.name.toLowerCase().trim();
        return name.indexOf(input) > -1;
      });
      // Checking if input exsists, if it does not we reset the filteredData to original state
      if(!input){
        return Vue.set(this, "filteredData", this.sampleData);
      }
      // If input does exist, return filtered search
      return Vue.set(this, "filteredData", search);
    },
    addPins(){
     // console.log('Adding pins', this.sampleData, this)
    }
  },
  mounted() {
    // When the application mounts, fetch the data from mock api then add pins to the map
    this.fetchData(this.addPins);

  },
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container.fluid {
    max-width: 100%;
    padding: 0;
}
</style>
