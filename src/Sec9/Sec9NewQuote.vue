<template>
	<div>
		New Quote Component
		<button @click="counter++">Increase</button>
		{{counter}}
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			counter: 0
		}
	},
	deactivated() {
		console.log('Deactivated new quote component');
	},
	activated() {
		console.log('Activated new quote component');
	}
}
</script>

<style scoped>
</style>
