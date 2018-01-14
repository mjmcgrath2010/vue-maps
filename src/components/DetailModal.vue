<template>
	<div>
	 <v-btn color="primary" style="margin-bottom: 4px" dark @click="dialog = true">View Details</v-btn>
	  <v-layout row justify-center>
	    <v-dialog v-model="dialog" width="60%">
	      <v-card>
	      	<v-card-media :src="images" height="50vh">
	        </v-card-media>
	        <v-card-title>
	          <span class="headline">{{name}}</span>
	        </v-card-title>
	        <v-card-text>{{description || 'Description not Availible'}}</v-card-text>
	        <h4>{{website}}</h4>
	        <v-card-actions>
	          <v-spacer></v-spacer>
	          <v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
	          <v-btn color="green darken-1" flat="flat" @click="mapLocation">View on Map</v-btn>
	        </v-card-actions>
	      </v-card>
	    </v-dialog>
	  </v-layout>
	</div>
</template>

<script>
import Vue from 'vue';

export default {
	name: 'DetailModal',
	props: ['cardImages', 'viewOnMap', 'locationDescription', 'locationName', 'locationWebsite'],
	data() {
		return {
			dialog: false,
			images: this.cardImages,
			description: this.locationDescription,
			name: this.locationName,
			website: this.locationWebsite
		};
	},
	methods: {
		mapLocation(){
			this.viewOnMap();
			this.dialog = false;
		}
	},
};
</script>

<style scoped>
	
</style>