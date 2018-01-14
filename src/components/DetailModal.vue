<template>
	<div>
	 <v-btn color="primary" style="margin-bottom: 4px" dark @click="dialog = true">View Details</v-btn>
	  <v-layout row justify-center>
	    <v-dialog v-model="dialog" width="50%">
	      <v-card>
		      	<image-slider v-if="images" :locationImages="images"></image-slider>
		      	<v-card-media v-if="!images && image" :src="image" height="40vh">
	        	</v-card-media>
	        <v-card-title>
	          <span class="headline">{{name}}</span>
	        </v-card-title>
	        <v-card-text>
	        	<p class="description">{{description || 'Description not Availible'}}</p>
	        	<span v-if="website">Visit us on the web: <a :href="website" target="_blank">{{website.replace('//', '')}}</a></span>
	    	</v-card-text>
	        <v-card-actions>
	          <v-spacer></v-spacer>
	          <v-btn color="red darken-1" flat="flat" @click="dialog = false">Close</v-btn>
	          <v-btn color="green darken-1" flat="flat" @click="mapLocation">View on Map</v-btn>
	        </v-card-actions>
	      </v-card>
	    </v-dialog>
	  </v-layout>
	</div>
</template>

<script>
import Vue from 'vue';
import ImageSlider from './ImageSlider';

export default {
	name: 'DetailModal',
	props: ['cardImage', 'cardImages', 'viewOnMap', 'locationDescription', 'locationName', 'locationWebsite'],
	data() {
		return {
			dialog: false,
			image: this.cardImage,
			images: this.cardImages,
			description: this.locationDescription,
			name: this.locationName,
			website: this.locationWebsite,
		};
	},
	methods: {
		mapLocation(){
			this.viewOnMap();
			this.dialog = false;
		}
	},
	components: {
		ImageSlider,
	},
};
</script>

<style scoped>
	.description {
		font-size: 1.3em;
	}

	.images-container{
		height: 200px;
	}

	.slider {
		/*height: 200px;*/
	}	
</style>