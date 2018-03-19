<template>
  	<div class="sec11 grid-container">
		<h2>Quotes Submission</h2>

		<sec11-new-quote></sec11-new-quote>

		<hr>

		<sec11-quote-info
			v-bind:quote="quote"
			v-bind:quoteStatus="quote.visibilityStatus">
		</sec11-quote-info>
    </div>
</template>

<script>
import Sec11QuoteInfo from './Sec11QuoteInfo.vue';
import Sec11NewQuote from './Sec11NewQuote.vue';
import { eventBus } from '../eventBus.js';

export default {
	data: function() {
		return {
			quote: {
				visibilityStatus: [],
				gender: '',
				quoteRating: 0,
				quoteSticky: null
			}
		}
	},
	computed: {

	},
	components: {
		Sec11NewQuote,
		Sec11QuoteInfo
	},
	methods: {

	},
	created() {
		eventBus.$on('ebSaveQuoteSubmission', (quote) => {
			console.log('recieved quote: ' + quote);
			Object.assign(this.quote, quote);
		});
	}
}
</script>

<style>

</style>

