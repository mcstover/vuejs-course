<template>
	<div>
		<form @submit.prevent="saveQuoteSubmission" id="quote-entry" title="Quote Entry Form">
			<textarea v-model="newQuote.newQuoteText" placeholder="Enter New Quote"></textarea>
			<input v-model.lazy="newQuote.author" placeholder="Author Name" />
			<input v-model.lazy.number="newQuote.yearQuoted" placeholder="Year Quoted" />
			<div>
				<label for="publicQuote">
					Public Quote
					<input
						type="checkbox"
						id="publicQuote"
						value="Public Quote"
						v-model="newQuote.visibilityStatus"
						/>
				</label>
				<label for="publishedQuote">
					Published Quote
					<input
						type="checkbox"
						id="publishedQuote"
						value="Published Quote"
						v-model="newQuote.visibilityStatus"
						/>
				</label>
			</div>
			<div>
				<label for="male">
					Male
					<input
						type="radio"
						id="male"
						value="M"
						v-model="newQuote.gender"
						/>
				</label>
				<label for="female">
					Female
					<input
						type="radio"
						id="female"
						value="F"
						v-model="newQuote.gender"
						/>
				</label>
			</div>
			<div>
				<select v-model="newQuote.quoteRating">
					<option disabled value="">Quote Rating</option>
					<option
						v-for="index in 10"
						v-bind:key="index"
						v-bind:value="index"
						:selected="index == newQuote.quoteRating">{{ index }}</option>
				</select>
			</div>
			<sec11-switch v-model="newQuote.quoteSticky"></sec11-switch>
			<button class="button success tiny">Save</button>
		</form>
	</div>
</template>

<script>
import { eventBus } from '../eventBus.js';
import Sec11Switch from './Sec11Switch.vue';

export default {
	data: function() {
		return {
			newQuote:  {
				newQuoteText: '',
				author: '',
				yearQuoted: null,
				visibilityStatus: [],
				gender: '',
				quoteRating: '',
				quoteSticky: true
			},
		}
	},
	components: {
		Sec11Switch
	},
	methods: {
		saveQuoteSubmission() {
			eventBus.saveQuoteSubmission(this.newQuote);
		}
	}
}
</script>

<style scoped>
</style>
