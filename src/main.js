import Vue from 'vue'
import App from './App.vue'

// Globally Registerd Component
// import SimpleStatus from './Sec7/Sec7SimpleStatus.vue'
// Vue.component('simple-status', SimpleStatus);

import './eventBus.js';
// export const eventBus = new Vue({
// 	methods: {
// 		incrementAge(age) {
// 			this.$emit('ebUpdateAge', age);
// 		}
// 	}
// });

// Global Directive in Main
Vue.directive('hl', {
	bind(el, binding, vnode) {
		// el.style.backgroundColor = 'green';
		let delay = 0;
		if (binding.modifiers['delayed']) {
			delay = 3000;
		}
		setTimeout(() => {
			if (binding.arg == 'bg') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = 'red';
			}
		}, delay);
		console.log(binding);
		console.log('directive bind hook');
	},
	inserted() { console.log('directive inserted hook'); },
	update() { console.log('directive update hook'); },
	componentUpdated() { console.log('directive component updated hook'); },
	unbind() { console.log('directive unbind hook'); }
});

new Vue({
  el: '#app',
  render: h => h(App)
});

