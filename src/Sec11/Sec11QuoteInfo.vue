<template>
	<div class="quote-info callout primary">
		<p class="quote-text">{{ quote.newQuoteText }}</p>
		<small v-if="quote.yearQuoted">
			- <b>{{ quote.quoteRating}}</b> | <i>{{ quote.author }} ({{ quote.yearQuoted }})</i>
			<sup>{{ quote.gender }}</sup>
		</small>
		<ul>
			<li
				v-for="(item, index) in quote.visibilityStatus"
				:key="index">
					{{item}}
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	props: [ 'quote' ]
}
</script>

<style scoped>
	.quote-info .quote-text {
		font-style: italic;
	}
</style>
