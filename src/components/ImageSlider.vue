<template>
	 <v-carousel>
    <v-carousel-item v-for="(image,i) in images" v-bind:src="image" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
	name: 'ImageSlider',
	props:['locationImages'],
	data(){
		return {
			images: this.locationImages,
		}
	},
}
</script>

<style>
	
</style>