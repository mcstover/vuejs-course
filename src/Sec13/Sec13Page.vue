<template>
  	<div class="sec13 grid-container">
		<h2>Filters & Mixins</h2>
		<small>VueJs does not ship with any built in filters.</small>
		<hr>
		<p>{{ text | toUppercase | toLowercase }}</p>
		<hr>
		<sec13-list></sec13-list>
		<hr>
		<input v-model="filteredText">
		<ul>
			<li v-for="(item, index) in filteredGrains" :key="index">{{ item }}</li>
		</ul>
    </div>
</template>

<script>
import { grainMixin } from './Sec13Mixin';
import Sec13List from './Sec13List.vue';

export default {
	mixins: [
		grainMixin
	],
	data: function() {
		return {
			text: 'The voice in black.'
		}
	},
	// local declaration of filter
	// Use Vue.filter for global registration
	filters: {
		toUppercase(value) {
			return value.toUpperCase();
		}
	},
	components: {
		Sec13List
	}
}
</script>

<style scoped>
li {display: block}
</style>

