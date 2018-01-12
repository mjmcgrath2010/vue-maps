<template>
	<div>
		<v-text-field
	        label="Search"
	        v-model="name"
	        :error-messages="nameErrors"
	        @input="$v.name.$touch()"
	        @blur="$v.name.$touch()"
	      ></v-text-field>
	</div>
</template>

<script>
export default {
	name: "Search",
	data(){
		return {};
	},
	methods: {

	},
};
</script>

<style scoped>
	
</style>