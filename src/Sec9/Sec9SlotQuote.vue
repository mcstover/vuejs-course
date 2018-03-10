<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<small class="subtitle"><slot name="subtitle">Some Subtitle</slot></small>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.title h2 {
		font-style: italic;
	}
	.subtitle {
		color: #CCC;
	}
</style>
