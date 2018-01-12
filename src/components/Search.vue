<template>
	<div>
		 <v-flex xs12>
            <v-text-field
              name="input-1-3"
              label="Search"
              single-line
              prepend-icon="search"
            ></v-text-field>
          </v-flex>
	</div>
</template>

<script>
export default {
	name: "Search",
	props: ['dataSource'],
	data(){
		return {
			data: this.dataSource,
		};
	},
	methods: {

	},
};
</script>

<style scoped>
	
</style>