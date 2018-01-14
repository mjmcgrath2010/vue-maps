<template>
 	<v-card class="location-card">
 		<v-card-media :src="image" height="200px">
        </v-card-media>
	  <v-card-title primary-title>
	    <div>
	      <h3 class="headline mb-0">{{ name }}</h3>
	      <div class="description">{{ description }}</div>
	      <div class="website">{{ website }}</div>
	    </div>
	  </v-card-title>
	  <v-card-actions>
	    <detail-modal
		:viewOnMap="pan"
	    />
	    <v-btn @click="pan" color="success">
 			View on Map
   		</v-btn>
	  </v-card-actions>
	</v-card> 
</template>

 <script> 
 import DetailModal from './DetailModal';

 export default {
 	name: 'LocationCard',
 	// Properties needed to render the component card and set up the DetailsModal
 	props: ['locationName', 'featuredImage', 'locationDescription', 'locationWebsite', 'locatationImages', 'panToLocation'],
 	data(){
 		// Passing data via props to render respective properties for LocationCard
 		return{
 			image: this.featuredImage,
 			images: this.locatationImages,
 			name: this.locationName,
 			description: this.locationDescription,
 			website: this.locationWebsite,
 			pan: this.panToLocation,
 		};
 	},
 	components: {
 		DetailModal,
 	},
 };
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped> 
	.location-card{
		margin: 2em 0;
		box-shadow: #0000007a 3px 3px 7px;
		-webkit-box-shadow: #0000007a 3px 3px 7px;
		-moz-box-shadow: #0000007a 3px 3px 7px;
	}
</style>