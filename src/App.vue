<template>
  <div id="app">
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4>
          <v-layout>
            <v-flex offset-xs1 xs10>
              <search></search>
              <location-card></location-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm12 md8>
          <Map name="ground-signal"></Map>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
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
  data(){
    return{
      data: null
    }
  }
}
</script>

<style>
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
