<template>
	<li>Server #{{ this.index }}</li>
</template>

<script>
export default {
	props: [
		'index'
	]
}
</script>

<style scoped>
	li {
		display: block;
		margin: .125rem 0;
		padding: .125rem .375rem;
		border: 1px solid #EEE;
		border-radius: .125rem;
	}
</style>

