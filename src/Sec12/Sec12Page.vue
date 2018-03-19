<template>
  	<div class="sec11 grid-container">
		<h2>Custom Directives</h2>
		<p v-hl:bg.delayed="'bisque'">Some Highlighted Text</p>
		<p v-local-hl:bg.delayed.blink="{mainColor: 'DarkSeaGreen', secondColor: 'MediumAquaMarine', delay: 1000}">Some Locally Highlighted Text</p>
		<hr>
		<h2>Built In Directives</h2>
		<p v-text="'Some text'"></p>
		<p v-html="'<strong>Some strong text</strong>'"></p>
		<hr>
    </div>
</template>

<script>
// import { eventBus } from '../eventBus.js';

export default {
	data: function() {
		return {
		}
	},
	directives: {
		'local-hl': {
			bind(el, binding, vnode) {
				// el.style.backgroundColor = 'green';
				let delay = 0;
				if (binding.modifiers['delayed']) {
					delay = 1500;
				}
				if (binding.modifiers['blink']) {
					let mainColor = binding.value.mainColor;
					let secondColor = binding.value.secondColor;
					let currentColor = mainColor;
					setTimeout(() => {
						setInterval(() => {
							currentColor = currentColor === mainColor ? secondColor : mainColor;
							el.style.backgroundColor = currentColor;
						}, 1000)
					}, delay);
				} else {
					setTimeout(() => {
						if (binding.arg == 'bg') {
							el.style.backgroundColor = binding.value.mainColor;
						} else {
							el.style.color = 'blue';
						}
					}, delay);
				}
			}
		}
	},
	components: {
	},
	methods: {

	},
	created() {

	}
}
</script>

<style>

</style>

