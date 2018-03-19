<template>
	<div @click="deleteQuote" class="callout">
		<div class="quote">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../eventBus.js';

export default {
	props: [ 'index' ],
	methods: {
		deleteQuote() {
			console.log('deleting quote: ' + this.index);
			eventBus.deleteQuote(this.index);
		}
	}
}
</script>

<style scoped>
	.quote {
		font-style: italic;
	}
</style>
