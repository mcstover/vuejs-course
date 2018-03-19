<template>
  	<div class="sec10 grid-container">
		<h2>{{ quoteList.length }} Quotes Added</h2>
		<div class="quote-meter">
			<div class="success progress" role="progressbar" tabindex="0">
				<div class="progress-meter" v-bind:style="{'width': percentComplete + '%'}">
					<p class="progress-meter-text">{{percentComplete}}%</p>
				</div>
			</div>
		</div>

		<sec10-new-quote></sec10-new-quote>

		<div v-if="quoteList.length">
			<sec10-quote
				v-for="(quote, index) in quoteList"
				v-bind:key="index"
				v-bind:index="index">
				{{quote.quoteText}}
			</sec10-quote>
		</div>

		<div class="quote-info callout primary">
			<p>INFO: Click on a quote to DELETE it.</p>
		</div>
    </div>
</template>

<script>
import Sec10Quote from './Sec10Quote.vue';
import Sec10NewQuote from './Sec10NewQuote.vue';
import { eventBus } from '../eventBus.js';

export default {
	data: function() {
		return {
			quoteTitle: 'Dynamic Quote Title',
			selectedComponent: 'Sec9SlotQuote',
			quoteList: []
		}
	},
	computed: {
		percentComplete: function() {
			return this.quoteList.length * 10;
		}
	},
	components: {
		Sec10Quote,
		Sec10NewQuote
	},
	methods: {

	},
	created() {
		eventBus.$on('ebSaveQuote', (quoteText) => {
			console.log('recieved quote: ' + quoteText);

			if (this.quoteList.length === 10) {
				alert('10 quote limit');
				return false;
			}

			this.quoteList.push({
				quoteText: quoteText
			});
		});
		eventBus.$on('ebDeleteQuote', (index) => {
			console.log('detected deleteQuote event at index: ' + index);
			this.quoteList = this.quoteList.filter((quote, i) => i !== index);
		});
	}
}
</script>

<style>

</style>

