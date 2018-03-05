<template>
	<div class="cell small-12 medium-4">
		<p><u>Server {{ selectedServer.id }}</u> status is  <b>{{ selectedServer.status }}</b></p>
		<button class="button tiny success" @click="fixServer">Fix Server Status</button>
	</div>
</template>

<script>
export default {
	props: [ 'selectedServer' ],
	methods: {
		fixServer() {
			this.$emit('fixServer', 'Normal');
		}
	}
}
</script>

<style scoped>
	div {
		border: 1px solid #EEE;
		border-radius: .125rem;
		padding: .375rem;
	}
</style>
