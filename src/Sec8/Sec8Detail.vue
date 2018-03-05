<template>
	<div class="cell small-12 medium-8">
		<h3>User Details</h3>
		<i>{{ recievedProp }}</i>
		<i>{{ userAge }}</i>
		<button class="button small" @click="doResetProp">Reset Prop</button>
		<button class="button small secondary" @click="resetPropFromParent">Reset Prop from Parent</button>
	</div>
</template>

<script>
import { eventBus } from '../main';

export default {
	data: function() {
		return {
			resetProp: this.sentProp
		}
	},
	props: {
		sentProp: { type: [String, Number] },
		resetPropFromParent: Function,
		userAge: Number
	},
	methods: {
		doResetProp() {
			this.resetProp = 'Reset the prop';
			this.$emit('sendUpProp', this.resetProp);
			// this.sentProp = 'Reset the prop';
			// this.$emit('sendUpProp', this.sentProp);
		}
	},
	computed: {
		recievedProp() {
			return this.sentProp;
		}
	},
	created() {
		eventBus.$on('ebUpdateAge', (data) => {
			this.userAge = data;
		});
	}
}
</script>

<style scoped>
	div {
		border: 1px solid #EEE;
		border-radius: .125rem;
		padding: .375rem;
	}
</style>
