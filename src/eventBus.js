import Vue from 'vue';

export const eventBus = new Vue({
	methods: {
        saveQuote(quoteText) {
            this.$emit('ebSaveQuote', quoteText);
		},
        deleteQuote(quoteId) {
            this.$emit('ebDeleteQuote', quoteId);
        },
		incrementAge(age) {
			this.$emit('ebUpdateAge', age);
		}
	}
});