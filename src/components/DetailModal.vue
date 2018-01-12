<template>
	<div>
		<v-btn flat color="orange" :@click="openModal">View Details</v-btn>
		<div class="detail-modal" v-if="active === true">
			<div class="modal-body">
				<p> Hello, World</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailModal',
	data() {
		return {
			active: false
		};
	},
	methods: {
		openModal() {
			// Display Modal
			Vue.set(this, 'active', true);
		},
		closeModal() {
			// Hide Modal
			Vue.set(this, 'active', false);
		},
	},
};
</script>

<style scoped>
	
</style>