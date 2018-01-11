<template>
 	<v-card class="location-card">
	  <v-card-title primary-title>
	    <div>
	      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
	      <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
	    </div>
	  </v-card-title>
	  <v-card-actions>
	    <v-btn flat color="orange">Share</v-btn>
	    <v-btn flat color="orange">Explore</v-btn>
	  </v-card-actions>
	</v-card> 
</template>

 <script> 
 export default {
 	name: 'LocationCard',
 	data(){
 		return{}
 	},
 };
</script>
<style scoped>
	.location-card{
		margin: 2em 0;
		box-shadow: #0000007a 3px 3px 7px;
		-webkit-box-shadow: #0000007a 3px 3px 7px;
		-moz-box-shadow: #0000007a 3px 3px 7px;
	}
</style>