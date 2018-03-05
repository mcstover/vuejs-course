import Vue from 'vue'
import App from './App.vue'

// Globally Registerd Component
// import SimpleStatus from './Sec7/Sec7SimpleStatus.vue'
// Vue.component('simple-status', SimpleStatus);

export const eventBus = new Vue({
	methods: {
		incrementAge(age) {
			this.$emit('ebUpdateAge', age);
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
});

