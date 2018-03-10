<template>
  	<div class="sec8 grid-container">
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
		</keep-alive>
		<!-- <sec9-slot-quote>
			<h2 slot="title">{{ quoteTitle }}</h2>
			<blockquote>Some interesting statement or quote.</blockquote>
		</sec9-slot-quote> -->
    </div>
</template>

<script>
import Sec9SlotQuote from './Sec9SlotQuote.vue';
import Sec9Author from './Sec9Author.vue';
import Sec9NewQuote from './Sec9NewQuote.vue';

export default {
	data: function() {
		return {
			quoteTitle: 'Dynamic Quote Title',
			selectedComponent: 'Sec9SlotQuote'
		}
	},
	components: {
		Sec9SlotQuote,
		Sec9Author,
		Sec9NewQuote
	},
	methods: {

	}
}
</script>

<style>

</style>

