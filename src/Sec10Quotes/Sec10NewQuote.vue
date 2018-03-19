<template>
	<div>
		<form @submit.prevent="saveQuote" id="quote-entry" title="Quote Entry Form">
			<textarea v-model="newQuoteText" placeholder="Enter New Quote"></textarea>
			<button class="button success tiny">Save</button>
		</form>		
	</div>
</template>

<script>
import { eventBus } from '../eventBus.js';

export default {
	data: function() {
		return {
			newQuoteText: '',
			counter: 0
		}
	},
	methods: {
		saveQuote() {
			eventBus.saveQuote(this.newQuoteText);
			this.counter = this.counter + 1;
			console.log(this.newQuoteText);
		}
	}
}
</script>

<style scoped>
</style>
