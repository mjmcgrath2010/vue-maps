<template>
	<div>
		 <v-flex xs12>
            <v-text-field
              name="input-1-3"
              label="Search"
              single-line
              prepend-icon="search"
              @keyup.native="filterResults"
            ></v-text-field>
          </v-flex>
	</div>
</template>

<script>
export default {
	name: "Search",
	props: ['dataSource', 'autoComplete'],
	data(){
		return {
			data: this.dataSource,
			filterResults: this.autoComplete,
		};
	},
};
</script>

<style scoped>
	
</style>