<template>
  	<div class="sec10 grid-container">
		<h2>Quotes Added</h2>
		<div class="quote-meter"></div>

		<!-- <sec10-new-quote></sec10-new-quote> -->

		<!-- <sec10-quote-list></sec10-quote-list> -->

		<div class="quote-info">
			<p>INFO: Click on a quote to DELETE it.</p>
		<!-- </div>
		<button @click="selectedComponent = 'Sec9SlotQuote'">Slot Quote</button>
		<button @click="selectedComponent = 'Sec9Author'">Author</button>
		<button @click="selectedComponent = 'Sec9NewQuote'">New</button>
		<hr>
		{{selectedComponent}}
		<hr>
		<keep-alive>
			<component :is="selectedComponent">
				<h2 slot="title">{{ quoteTitle }}</h2>
				<blockquote>Some interesting statement or quote.</blockquote>
			</component>
		</keep-alive> -->
		<!-- <sec9-slot-quote>
			<h2 slot="title">{{ quoteTitle }}</h2>
			<blockquote>Some interesting statement or quote.</blockquote>
		</sec9-slot-quote> -->
    </div>
</template>

<script>
// import Sec9SlotQuote from './Sec9SlotQuote.vue';
// import Sec9Author from './Sec9Author.vue';
import Sec10NewQuote from './Sec10NewQuote.vue';

export default {
	data: function() {
		return {
			quoteTitle: 'Dynamic Quote Title',
			selectedComponent: 'Sec9SlotQuote'
		}
	},
	components: {
		// Sec9SlotQuote,
		// Sec9Author,
		Sec10NewQuote
	},
	methods: {

	}
}
</script>

<style>

</style>

