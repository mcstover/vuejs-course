<template>
	<li @click="viewStatus">
		Server <strong>#{{ this.id }}</strong>
	</li>
</template>

<script>
export default {
	props: [
		'index',
		'id',
		'status'
	],
	methods: {
		viewStatus() {
			this.$emit('showStatus', this.id);
		}
	}
}
</script>

<style scoped>
	li {
		display: block;
		margin: .125rem 0;
		padding: .125rem .375rem;
		border: 1px solid #EEE;
		border-radius: .125rem;
		cursor: pointer;
	}
	li:hover {
		background:#EEE;
	}
</style>

